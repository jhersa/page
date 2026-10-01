<script setup>
import Prompt from './Prompt.vue';
import OpenTofuIcon from './icons/OpenTofuIcon.vue';

const stack = [
  { name: 'Kubernetes', icon: '', color: '#326CE5' },
  { name: 'Docker', icon: '', color: '#2496ED' },
  { name: 'AWS', icon: '', color: '#FF9900' },
  { name: 'Google Cloud', icon: '', color: '#4285F4' },
  { name: 'OpenTofu', svg: true, color: '#FEDA15' },
  { name: 'Ansible', icon: '', color: '#EE0000' },
  { name: 'GitHub Actions', icon: '', color: '#2088FF' },
  { name: 'GitLab Runner', icon: '', color: '#FC6D26' },
  { name: 'Helm', icon: '', color: '#0F1689' },
  { name: 'Node.js', icon: '', color: '#539E43' },
  { name: 'Python', icon: '', color: '#3776AB' },
  { name: 'Go', icon: '', color: '#00ADD8' },
];
</script>

<template>
  <div class="prompt-line">
    <Prompt path="~" />cat stack.txt
  </div>

  <ul class="stack">
    <li v-for="tool in stack" :key="tool.name" class="tool">
      <OpenTofuIcon v-if="tool.svg" class="icon-svg" :style="{ color: tool.color }" />
      <span v-else class="nf" :style="{ color: tool.color }">{{ tool.icon }}</span>
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
}

.nf {
  font-family: "Symbols Nerd Font";
  font-size: 1.1em;
  line-height: 1;
}

.icon-svg {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
}
</style>
