<script setup>
import { useTheme } from '../composables/useTheme';

const { theme, toggle } = useTheme();
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    :title="theme === 'dark' ? 'Tema claro' : 'Tema oscuro'"
    @click="toggle"
  >
    <span class="nf" aria-hidden="true">{{ theme === 'dark' ? '' : '' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--comment);
  cursor: pointer;
  transition: color 0.15s;
}

/* Área de toque de 44px sin cambiar el tamaño visible */
.theme-toggle::before {
  content: "";
  position: absolute;
  inset: -8px;
}

.theme-toggle:hover {
  color: var(--warn);
  border-color: transparent;
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 1px;
}

.nf {
  font-family: "Symbols Nerd Font";
  font-size: 0.95em;
  line-height: 1;
}
</style>
