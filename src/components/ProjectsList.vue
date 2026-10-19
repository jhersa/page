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
  <div class="prompt-line">
    <Prompt path="~/work" />bash ./work.sh
  </div>

  <div class="cards">
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
</template>

<style scoped>
.prompt-line {
  margin: 1.5rem 0 0.75rem;
  color: var(--fg);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
