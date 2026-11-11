<script setup>
import Prompt from './Prompt.vue';
import giraffeAscii from './giraffeAscii.js';

const info = [
  { key: 'rol', value: 'DevSecOps · SRE · Cloud' },
  { key: 'foco', value: 'Kubernetes · Terraform · contenedores' },
  { key: 'os', value: 'Debian' },
];
</script>

<template>
  <h2 class="sr-only">Sistema</h2>
  <div class="prompt-line">
    <Prompt path="~" branch="main" />neofetch
  </div>

  <div class="neofetch print" style="--print-delay: 800ms">
    <pre class="nf-ascii print" style="--print-delay: 800ms" role="img" aria-label="Logo: jirafa en arte ASCII"><span v-for="(line, i) in giraffeAscii" :key="i">{{ line }}</span></pre>
    <ul class="nf-info print" style="--print-delay: 840ms">
      <li v-for="item in info" :key="item.key">
        <span class="nf-key">{{ item.key }}</span>
        <span class="nf-val">{{ item.value }}</span>
      </li>
      <li>
        <span class="nf-key">contacto</span>
        <a class="nf-val nf-link" href="https://www.linkedin.com/in/jhersa/" target="_blank" rel="noopener">linkedin.com/in/jhersa<span class="sr-only"> (abre en pestaña nueva)</span></a>
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
  align-items: flex-start;
  gap: 1.5rem;
  margin: 0.5rem 0 0 1.2rem;
}

.nf-ascii {
  margin: 0;
  flex-shrink: 0;
  font-family: inherit;
  font-size: 0.72em;
  line-height: 1.15;
  font-weight: 700;
  color: var(--logo);
}

.nf-ascii > span {
  display: block;
  min-height: 1.15em;
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

.nf-link {
  color: var(--blue);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.nf-link:hover {
  color: var(--blue);
  text-decoration-thickness: 2px;
}

@media (max-width: 480px) {
  /* No caben lado a lado: el logo arriba y los datos debajo */
  .neofetch {
    flex-direction: column;
    gap: 0.75rem;
  }

  .nf-ascii {
    font-size: 0.6em;
  }
}
</style>
