<script setup>
import Prompt from './Prompt.vue';

const stack = [
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Google Cloud', color: '#4285F4' },
  { name: 'Terraform', color: '#844FBA' },
  { name: 'Ansible', color: '#EE0000' },
  { name: 'GitHub Actions', color: '#2088FF' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'GitLab Runner', color: '#FC6D26' },
];
</script>

<template>
  <div class="prompt-line">
    <Prompt path="~" />cat stack.txt
  </div>

  <ul class="stack">
    <li v-for="tool in stack" :key="tool.name" class="tool">
      <span class="dot" :style="{ backgroundColor: tool.color }"></span>
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

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
</style>
