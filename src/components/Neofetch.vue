<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Prompt from './Prompt.vue';

const uptime = ref('0s');
let startedAt;
let timer;

function formatUptime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
}

onMounted(() => {
  startedAt = performance.now();
  timer = setInterval(() => {
    uptime.value = formatUptime(performance.now() - startedAt);
  }, 1000);
});

onUnmounted(() => clearInterval(timer));

const info = [
  { key: 'os', value: 'Debian' },
  { key: 'host', value: 'suave.sh' },
  { key: 'shell', value: '/bin/zsh' },
];
</script>

<template>
  <div class="prompt-line">
    <Prompt path="~" branch="main" />neofetch
  </div>

  <div class="neofetch">
    <img src="/avatar.svg" class="nf-avatar" alt="avatar" />
    <ul class="nf-info">
      <li v-for="item in info" :key="item.key">
        <span class="nf-key">{{ item.key }}</span>
        <span class="nf-val">{{ item.value }}</span>
      </li>
      <li>
        <span class="nf-key">uptime</span>
        <span class="nf-val">{{ uptime }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.prompt-line {
  margin: 1.5rem 0 0.75rem;
  color: var(--fg);
}

.neofetch {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0.5rem 0 0 1.2rem;
}

.nf-avatar {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  align-self: flex-start;
}

.nf-info {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9em;
}

.nf-key {
  color: var(--cyan);
  font-weight: 700;
  width: 6.5em;
  display: inline-block;
}

.nf-val {
  color: var(--fg);
}

@media (max-width: 480px) {
  .neofetch {
    gap: 1rem;
  }

  .nf-avatar {
    width: 56px;
    height: 56px;
  }
}
</style>
