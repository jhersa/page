import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriterLoop(items, {
  typeSpeed = 70,
  deleteSpeed = 35,
  holdTime = 1200,
  finalHoldTime = holdTime,
  gapTime = 300,
  startDelay = 0,
  loop = true,
} = {}) {
  const display = ref('')
  const done = ref(false)
  const timers = []

  function schedule(fn, delay) {
    timers.push(setTimeout(fn, delay))
  }

  function typeText(text, onComplete) {
    let i = 0
    const id = setInterval(() => {
      i++
      display.value = text.slice(0, i)
      if (i >= text.length) {
        clearInterval(id)
        onComplete()
      }
    }, typeSpeed)
    timers.push(id)
  }

  function deleteText(onComplete) {
    const id = setInterval(() => {
      if (display.value.length === 0) {
        clearInterval(id)
        onComplete()
        return
      }
      display.value = display.value.slice(0, -1)
    }, deleteSpeed)
    timers.push(id)
  }

  function runIndex(index) {
    const isLast = index === items.length - 1
    typeText(items[index], () => {
      if (isLast && !loop) {
        done.value = true
        return
      }
      schedule(() => {
        deleteText(() => {
          schedule(() => runIndex(isLast ? 0 : index + 1), gapTime)
        })
      }, isLast ? finalHoldTime : holdTime)
    })
  }

  onMounted(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      display.value = items[items.length - 1]
      done.value = true
      return
    }

    schedule(() => runIndex(0), startDelay)
  })

  onUnmounted(() => {
    timers.forEach((id) => {
      clearTimeout(id)
      clearInterval(id)
    })
  })

  return { display, done }
}
