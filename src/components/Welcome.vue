<script setup>

defineProps({
  msg: String,
  description: String,
})

</script>

<template>
  <p class="prompt-line">
    <span class="prompt">$</span> whoami
  </p>
  <h1 class="output name">{{ msg }}</h1>

  <p class="prompt-line">
    <span class="prompt">$</span> cat role.txt
  </p>
  <p class="output description">{{ description }}</p>
</template>

<style scoped>
.prompt-line {
  margin: 0.75rem 0 0.4rem;
}

.prompt {
  color: var(--green);
  font-weight: 700;
  margin-right: 0.5em;
}

.output {
  margin: 0 0 0 1.2rem;
}

.name {
  color: var(--magenta);
  font-size: 1.8em;
}

.description {
  color: var(--comment);
}
</style>
