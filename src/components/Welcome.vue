<script setup>

defineProps({
  msg: String,
  description: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <p> {{ description }} </p>
</template>
