<script setup lang="ts">
import { FunctionalComponent, ref, SVGAttributes } from "vue";
import Card from "~/components/Card.vue";
import ShinyCard from "~/components/ShinyCard.vue";
import {
  C,
  CSS3,
  Figma,
  Flutter,
  Git,
  GitHub,
  HTML5,
  Java,
  Javascript,
  Jest,
  NPM,
  Next,
  Node,
  Nuxt,
  React,
  Redux,
  SASS,
  Storybook,
  Tailwindcss,
  Typescript,
  VSCode,
  VisualStudio,
  Vue,
  Vuetify,
  Webpack,
  Yarn,
} from "~/lib/icons";

interface TechCard {
  name: string;
  icon: FunctionalComponent<SVGAttributes, {}, any>;
}

const techCards = ref<TechCard[]>([
  { icon: Javascript, name: "Javascript" },
  { icon: Typescript, name: "Typescript" },
  { icon: HTML5, name: "HTML5" },
  { icon: CSS3, name: "CSS3" },
  { icon: SASS, name: "SASS" },
  { icon: Tailwindcss, name: "Tailwindcss" },
  { icon: Webpack, name: "Webpack" },
  { icon: Git, name: "Git" },
  { icon: GitHub, name: "GitHub" },
  { icon: NPM, name: "NPM" },
  { icon: Yarn, name: "Yarn" },
  { icon: VSCode, name: "VSCode" },
  { icon: VisualStudio, name: "VisualStudio" },
  { icon: Java, name: "Java" },
  { icon: Flutter, name: "Flutter" },
  { icon: React, name: "React" },
  { icon: Redux, name: "Redux" },
  { icon: Vue, name: "Vue" },
  { icon: Nuxt, name: "Nuxt" },
  { icon: Next, name: "Next" },
  { icon: Vuetify, name: "Vuetify" },
  { icon: Node, name: "Node" },
  { icon: Jest, name: "Jest" },
  { icon: Storybook, name: "Storybook" },
  { icon: Figma, name: "Figma" },
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Card class="flex flex-col gap-4 md:flex-row">
      <div class="flex flex-col gap-2">
        <h1 class="text-4xl font-bold">
          Hi, I'm <span class="text-accent">Lucas</span>
        </h1>
        <p class="text-xl [text-wrap:balance]">
          I'm a front-end developer with a passion for building beautiful
          interfaces and experiences.
        </p>
      </div>
      <img
        src="/avatar.png"
        alt=""
        class="w-24 rounded-full border-4 border-accent lg:w-64"
      />
    </Card>

    <div
      class="grid w-full grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-6"
    >
      <Card
        v-for="card in techCards"
        :key="JSON.stringify(card)"
        class="group flex flex-col items-center"
      >
        <component
          :is="card.icon"
          class="h-10 w-10 grayscale transition-all duration-150 group-hover:grayscale-0"
        >
        </component>
        <p>
          {{ card.name }}
        </p>
      </Card>
    </div>
  </div>
</template>
