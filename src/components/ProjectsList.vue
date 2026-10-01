<script setup>
import Prompt from './Prompt.vue';
import { formatLsDate, formatLsSize } from '../lib/ls';

const mtime = formatLsDate();

const products = [
  {
    name: 'pagando',
    target: 'pagando.mx/wallet',
    href: 'https://www.pagando.mx/wallet/',
  },
  {
    name: 'pagando-check',
    target: 'pagando.mx/pagando-check',
    href: 'https://www.pagando.mx/pagando-check/',
  },
  {
    name: 'vas-pagando',
    target: 'pagando.mx/vas-pagando',
    href: 'https://www.pagando.mx/vas-pagando/',
  },
];
</script>

<template>
  <p class="prompt-line">
    <Prompt path="~/blacklabs" />ls -lha
  </p>
  <p class="total">total {{ products.length }}</p>

  <div class="ls-table">
    <a v-for="p in products" :key="p.name" class="ls-row" :href="p.href" target="_blank" rel="noopener">
      <span class="meta">
        <span class="perms">lrwxr-xr-x</span>
        <span class="owner">jhersa</span>
        <span class="group">blacklabs</span>
        <span class="size">{{ formatLsSize(p.target.length) }}</span>
        <span class="date">{{ mtime }}</span>
      </span>
      <span class="name">
        {{ p.name }}
        <span class="arrow-op">-&gt;</span>
        <span class="target">{{ p.target }}</span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.prompt-line {
  margin: 1.5rem 0 0.2rem;
  color: var(--fg);
}

.tagline {
  margin: 0 0 0.4rem 1.2rem;
  color: var(--comment);
  font-style: italic;
  font-size: 0.9em;
}

.total {
  margin: 0 0 0.2rem 1.2rem;
  color: var(--comment);
  font-size: 0.85em;
}

.ls-table {
  display: flex;
  flex-direction: column;
}

.ls-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: 0.75em;
  row-gap: 0.15em;
  padding: 0.3em 0.75em;
  border-radius: 4px;
  color: var(--fg);
  font-size: 0.9em;
}

.ls-row:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--fg);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75em;
  color: var(--comment);
}

.perms {
  color: var(--magenta);
}

.name {
  color: var(--blue);
  font-weight: 700;
  flex: 1 1 180px;
  min-width: 0;
  overflow-wrap: break-word;
}

.ls-row:hover .name {
  color: var(--orange);
}

.arrow-op {
  color: var(--comment);
  font-weight: 400;
  margin: 0 0.3em;
}

.target {
  color: var(--green);
  font-weight: 400;
}

@media (max-width: 600px) {
  .owner,
  .group {
    display: none;
  }
}
</style>
