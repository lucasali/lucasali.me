import { promises as fs } from "node:fs";
import * as path from "node:path";
import { glob } from "glob";
import { parse } from "node-html-parser";

const cwd = process.cwd();
const inputDir = path.join(cwd, "src", "assets", "icons");
const inputDirRelative = path.relative(cwd, inputDir);
const outputDir = path.join(cwd, "src", "components");
const outputDirRelative = path.relative(cwd, outputDir);

const files = glob.sync("**/*.svg", {
  cwd: inputDir,
});

if (files.length === 0) {
  console.log(`No SVG files found in ${inputDirRelative}`);
  process.exit(0);
}

console.log(`Generating sprite for ${inputDirRelative}`);

await generateSvgSprite({
  files,
  inputDir,
  outputPath: path.join(outputDir, "icon.svg"),
});

async function generateSvgSprite({
  files,
  inputDir,
  outputPath,
}: {
  files: string[];
  inputDir: string;
  outputPath: string;
}) {
  const symbols = await Promise.all(
    files.map(async (file) => {
      const input = await fs.readFile(path.join(inputDir, file), "utf8");
      const root = parse(input);
      const svg = root.querySelector("svg");
      if (!svg) throw new Error("No SVG element found");
      svg.tagName = "symbol";
      svg.setAttribute("id", file.replace(/\.svg$/, ""));
      svg.removeAttribute("xmlns");
      svg.removeAttribute("xmlns:xlink");
      svg.removeAttribute("version");
      svg.removeAttribute("width");
      svg.removeAttribute("height");
      return root.toString().trim();
    })
  );
  const output = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">`,
    `<defs>`,
    ...symbols,
    `</defs>`,
    `</svg>`,
  ].join("\n");
  return fs.writeFile(outputPath, output, "utf8");
}

await generateJson({
  files,
  outputPath: path.join(outputDir, "icons.json"),
});
async function generateJson({
  files,
  outputPath,
}: {
  files: string[];
  outputPath: string;
}) {
  const output = {
    iconNames: Object.fromEntries(
      files.map((file) => {
        return [path.basename(file, ".svg"), true];
      })
    ),
  };
  const json = JSON.stringify(output, null, 2);
  return fs.writeFile(outputPath, json, "utf8");
}
