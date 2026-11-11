<script setup>
import Prompt from './Prompt.vue';
import OpenTofuIcon from './icons/OpenTofuIcon.vue';

const stack = [
  { name: 'Kubernetes', icon: '', color: '#326CE5' },
  { name: 'Docker', icon: '', color: '#2496ED' },
  { name: 'AWS', icon: '', color: '#FF9900' },
  { name: 'Google Cloud', icon: '', color: '#4285F4' },
  { name: 'OpenTofu', svg: true, color: '#FEDA15', light: '#8a5a00' },
  { name: 'Ansible', icon: '', color: '#EE0000' },
  { name: 'GitHub Actions', icon: '', color: '#2088FF' },
  { name: 'GitLab Runner', icon: '', color: '#FC6D26' },
  { name: 'Helm', icon: '', color: '#7b8cff', light: '#0F1689' },
  { name: 'Node.js', icon: '', color: '#539E43' },
  { name: 'Python', icon: '', color: '#3776AB' },
  { name: 'Go', icon: '', color: '#00ADD8', light: '#00728f', wide: true },
];
</script>

<template>
  <h2 class="sr-only">Stack tecnológico</h2>
  <div class="prompt-line">
    <Prompt path="~" />cat stack.txt
  </div>

  <ul class="stack print" style="--print-delay: 1000ms">
    <li
      v-for="tool in stack"
      :key="tool.name"
      class="tool"
      :style="{ '--c': tool.color, '--c-light': tool.light || tool.color }"
    >
      <OpenTofuIcon v-if="tool.svg" class="icon-svg" aria-hidden="true" />
      <span v-else class="nf" :class="{ 'nf-wide': tool.wide }" aria-hidden="true">{{ tool.icon }}</span>
      {{ tool.name }}
    </li>
  </ul>
</template>

<style scoped>
.prompt-line {
  margin: 1.5rem 0 0.5rem;
  color: var(--fg);
}

.stack {
  list-style: none;
  margin: 0 0 0 1.2rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tool {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.2em 0.7em;
  border: 1px solid var(--comment);
  border-radius: 999px;
  font-size: 0.85em;
  transition: border-color 0.15s, background-color 0.15s;
}

/* Mismo lenguaje que las tarjetas de links.sh: el borde toma el color de la herramienta */
.tool:hover {
  border-color: var(--c);
  background-color: color-mix(in srgb, var(--c) 12%, transparent);
}

:root[data-theme="light"] .tool:hover {
  border-color: var(--c-light);
  background-color: color-mix(in srgb, var(--c-light) 10%, transparent);
}

.nf {
  font-family: "Symbols Nerd Font";
  font-size: 1.1em;
  line-height: 1;
  color: var(--c);
}

/* Algunos logos de marca son demasiado oscuros o claros para un tema; cada uno trae su variante */
/* Wordmarks como el de Go ocupan poca altura en su caja; se escalan sin mover el layout */
.nf-wide {
  display: inline-block;
  transform: scale(1.6);
  margin: 0 0.3em;
}

:root[data-theme="light"] .nf {
  color: var(--c-light);
}

.icon-svg {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  color: var(--c);
}

:root[data-theme="light"] .icon-svg {
  color: var(--c-light);
}
</style>
