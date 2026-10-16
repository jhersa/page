<script setup>
defineProps({
  title: {
    type: String,
    default: 'jhersa@suave.sh: ~',
  },
});
</script>

<template>
  <div class="terminal">
    <div class="terminal-header">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="terminal-title">{{ title }}</span>
    </div>

    <div class="terminal-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.terminal {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg-panel);
  border: 1px solid #000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-header);
  border-bottom: 1px solid #000;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot-red {
  background: var(--red);
}

.dot-yellow {
  background: var(--yellow);
}

.dot-green {
  background: var(--green);
}

.terminal-title {
  margin-left: 8px;
  color: var(--comment);
  font-size: 0.85rem;
}

.terminal-body {
  padding: 2rem 1.5rem 2.5rem;
  text-align: left;
}

@media (max-width: 480px) {
  .terminal-body {
    padding: 1.5rem 1rem 2rem;
  }
}
</style>
