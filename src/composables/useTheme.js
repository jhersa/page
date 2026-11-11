import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'

// Sin preferencia guardada, sigue el sistema; al cambiar a mano se guarda la elección.
function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage bloqueado: usa la preferencia del sistema
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const theme = ref(initialTheme())

watch(
  theme,
  (value) => {
    document.documentElement.setAttribute('data-theme', value)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', value === 'light' ? '#ffffff' : '#0a0a0a')
  },
  { immediate: true },
)

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, theme.value)
    } catch {
      // sin almacenamiento, la elección dura solo esta visita
    }
  }

  return { theme, toggle }
}
