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
    <span class="nf">{{ theme === 'dark' ? '' : '' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--comment);
  cursor: pointer;
  transition: color 0.15s;
}

.theme-toggle:hover {
  color: var(--yellow);
  border-color: transparent;
}

.theme-toggle:focus,
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
