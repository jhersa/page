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
  primary: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a class="card" :class="{ 'card-primary': primary }" :href="href" target="_blank" rel="noopener" :style="{ '--accent': color }">
    <span class="card-icon" aria-hidden="true">
      <span v-if="iconSrc" class="card-mask" :style="{ '--icon': `url(${iconSrc})` }"></span>
      <span v-else class="nf">{{ icon }}</span>
    </span>
    <span class="card-label">{{ label }}</span>
    <span v-if="description" class="card-desc">{{ description }}</span>
    <span class="sr-only">(abre en pestaña nueva)</span>
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
}

.card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: no-preference) {
  .card:hover {
    transform: translateY(-2px);
  }
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

/* El SVG se usa como máscara para que el icono tome el color de acento en ambos temas */
.card-mask {
  width: 1.5em;
  height: 1.5em;
  background: var(--accent);
  -webkit-mask: var(--icon) center / contain no-repeat;
  mask: var(--icon) center / contain no-repeat;
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

/* En móvil: una tarjeta por fila, icono y nombre en la misma línea */
@media (max-width: 480px) {
  .card {
    flex: 1 1 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.75rem;
  }

  .card-desc {
    flex-basis: 100%;
  }
}

/* Acción principal: ocupa toda la fila y tiene borde de acento */
.card-primary {
  flex: 1 1 100%;
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 8%, var(--bg-panel));
}

.card-primary .card-label {
  font-size: 1.15em;
}
</style>
