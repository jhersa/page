<script setup>
defineProps({
  title: {
    type: String,
    default: 'jhersa@suave.sh: ~',
  },
  label: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section class="terminal" :aria-label="label || title">
    <div class="terminal-header">
      <span class="dot dot-red" aria-hidden="true"></span>
      <span class="dot dot-yellow" aria-hidden="true"></span>
      <span class="dot dot-green" aria-hidden="true"></span>
      <span class="terminal-title" aria-hidden="true">{{ title }}</span>
      <div class="terminal-actions">
        <slot name="actions" />
      </div>
    </div>

    <div class="terminal-body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.terminal {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-header);
  border-bottom: 1px solid var(--border);
}

.terminal-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
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
