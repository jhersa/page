<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'var(--fg)',
  },
  icon: {
    type: String,
    default: '',
  },
  iconSrc: {
    type: String,
    default: '',
  },
  iconAlt: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <a class="card" :href="href" target="_blank" rel="noopener" :style="{ '--accent': color }">
    <span class="card-icon">
      <img v-if="iconSrc" :src="iconSrc" :alt="iconAlt || label" />
      <span v-else class="nf">{{ icon }}</span>
    </span>
    <span class="card-label">{{ label }}</span>
    <span v-if="description" class="card-desc">{{ description }}</span>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  flex: 1 1 160px;
  min-width: 150px;
  border: 1px solid var(--comment);
  border-radius: 8px;
  color: var(--fg);
  background: var(--bg);
  transition: border-color 0.15s, transform 0.15s;
}

.card:hover {
  border-color: var(--accent);
  color: var(--fg);
  transform: translateY(-2px);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  font-size: 1.6em;
  color: var(--accent);
}

.card-icon .nf {
  font-family: "Symbols Nerd Font";
}

.card-icon img {
  width: 1.5em;
  height: 1.5em;
}

:root[data-theme="light"] .card-icon img {
  filter: invert(1);
}

.card-label {
  font-weight: 700;
  color: var(--accent);
}

.card-desc {
  font-size: 0.8em;
  color: var(--comment);
  line-height: 1.4;
}
</style>
