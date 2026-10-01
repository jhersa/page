import { ref, onMounted } from 'vue'

export function useTypewriter(text, { speed = 35, delay = 0 } = {}) {
  const display = ref('')
  const done = ref(false)

  onMounted(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      display.value = text
      done.value = true
      return
    }

    setTimeout(() => {
      let i = 0
      const timer = setInterval(() => {
        i++
        display.value = text.slice(0, i)
        if (i >= text.length) {
          clearInterval(timer)
          done.value = true
        }
      }, speed)
    }, delay)
  })

  return { display, done }
}
