<script setup>
import Prompt from './Prompt.vue';
import Card from './Card.vue';

const products = [
  {
    name: 'Pagando',
    description: 'Billetera digital para pagos, transferencias y cuentas.',
    href: 'https://www.pagando.mx/wallet/',
    icon: '',
    color: 'var(--blue)',
  },
  {
    name: 'Pagando Check',
    description: 'Cobro con tarjeta, links de pago y terminal.',
    href: 'https://www.pagando.mx/pagando-check/',
    icon: '',
    color: 'var(--magenta)',
  },
  {
    name: 'Vas Pagando',
    description: 'Financiamiento y liquidez para negocios.',
    href: 'https://www.pagando.mx/vas-pagando/',
    icon: '',
    color: 'var(--green)',
  },
];
</script>

<template>
  <h2 class="sr-only">Trabajo</h2>
  <div class="prompt-line">
    <Prompt path="~/work" />bash ./work.sh
  </div>

  <ul class="output-lines print" style="--print-delay: 1550ms">
    <li>Me apasiona implementar tecnología: probar, evaluar e integrar herramientas <span class="kw-green">open source</span>.</li>
    <li><span class="kw-blue">Kubernetes</span>, <span class="kw-magenta">Terraform</span> y los <span class="kw-orange">contenedores</span> son mis favoritos para construir infraestructura.</li>
  </ul>

  <div class="print" style="--print-delay: 1650ms">
    <p class="holding">Productos del holding fintech Pagando:</p>

    <div class="cards print" style="--print-delay: 1690ms">
      <Card
        v-for="p in products"
        :key="p.name"
        :href="p.href"
        :label="p.name"
        :description="p.description"
        :icon="p.icon"
        :color="p.color"
      />
    </div>
  </div>
</template>

<style scoped>
.prompt-line {
  margin: 1.5rem 0 0.75rem;
  color: var(--fg);
}

.kw-green,
.kw-blue,
.kw-magenta,
.kw-orange {
  font-family: var(--font-accent);
  font-weight: 700;
}

.kw-green { color: var(--green); }
.kw-blue { color: var(--blue); }
.kw-magenta { color: var(--magenta); }
.kw-orange { color: var(--orange); }

.holding {
  margin: 0 0 0.5rem 1.2rem;
  color: var(--comment);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
