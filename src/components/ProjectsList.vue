<script setup>
import Prompt from './Prompt.vue';
</script>

<template>
  <h2 class="sr-only">Experiencia</h2>
  <div class="prompt-line">
    <Prompt path="~/work" />bash ./work.sh
  </div>

  <!-- Salida estilo log: experiencia sin nombrar a la empresa -->
  <ul class="log print" style="--print-delay: 1550ms">
    <li>
      <span class="tag tag-infra">[infra]</span>
      <span>Mantengo la infraestructura de tres productos <span class="kw">fintech</span>: billetera digital, cobro con tarjeta y financiamiento.</span>
    </li>
    <li>
      <span class="tag tag-ops">[ops]</span>
      <span>Monitorizo y protejo los sistemas que los sostienen.</span>
    </li>
    <li>
      <span class="tag tag-sec">[sec]</span>
      <span>Implemento <span class="kw">estándares de seguridad</span>.</span>
    </li>
    <li>
      <span class="tag tag-tools">[tools]</span>
      <span>Pruebo, evalúo e integro herramientas <span class="kw-green">open source</span>: <span class="kw-blue">Kubernetes</span>, <span class="kw-magenta">Terraform</span> y <span class="kw-orange">contenedores</span>.</span>
    </li>
  </ul>
</template>

<style scoped>
.prompt-line {
  margin: 1.5rem 0 0.75rem;
  color: var(--fg);
}

.log {
  list-style: none;
  margin: 0 0 0.75rem 1.2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: var(--fg-muted);
}

/* Etiqueta en columna fija, como un log alineado */
.log li {
  display: grid;
  grid-template-columns: 7.5ch 1fr;
  column-gap: 0.75ch;
  align-items: baseline;
}

.tag {
  font-weight: 700;
}

.tag-infra { color: var(--blue); }
.tag-ops { color: var(--green); }
.tag-sec { color: var(--red); }
.tag-tools { color: var(--magenta); }

.kw,
.kw-green,
.kw-blue,
.kw-magenta,
.kw-orange {
  font-family: var(--font-accent);
  font-weight: 700;
}

.kw { color: var(--fg); }
.kw-green { color: var(--green); }
.kw-blue { color: var(--blue); }
.kw-magenta { color: var(--magenta); }
.kw-orange { color: var(--orange); }

@media (max-width: 480px) {
  /* Sin espacio para la columna: la etiqueta va arriba de su línea */
  .log li {
    grid-template-columns: 1fr;
  }
}
</style>
