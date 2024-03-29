import { nextTick } from 'vue'
import { useDark } from '@vueuse/core'
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isDark = useDark()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toggleDark(event: MouseEvent) {
  // eslint-disable-next-line no-console
  console.log(isDark.value)

  const isAppearanceTransition
    // @ts-expect-error experimental API
    = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
      },
    )
  })
}
