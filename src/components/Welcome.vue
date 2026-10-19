<script setup>
import Prompt from './Prompt.vue';
import { useTypewriterLoop } from '../composables/useTypewriterLoop';

const props = defineProps({
  msg: String,
  description: String,
})

const { display: typedMsg } = useTypewriterLoop([props.msg], {
  typeSpeed: 90,
  deleteSpeed: 45,
  holdTime: 2000,
  gapTime: 400,
  loop: true,
});

const roles = props.description
  .replace(/\.$/, '')
  .split('|')
  .map((role) => role.trim());

const { display: typedDescription } = useTypewriterLoop([...roles, props.description], {
  typeSpeed: 50,
  deleteSpeed: 30,
  holdTime: 900,
  finalHoldTime: 6000,
  gapTime: 250,
  startDelay: props.msg.length * 90 + 600,
  loop: true,
});
</script>

<template>
  <div class="prompt-line">
    <Prompt path="~" />whoami
  </div>
  <h1 class="output name">
    {{ typedMsg }}<span class="type-cursor">&#9615;</span>
  </h1>

  <div class="prompt-line">
    <Prompt path="~" />bash ./role.sh
  </div>
  <p class="output description">
    {{ typedDescription }}<span class="type-cursor">&#9615;</span>
  </p>
</template>

<style scoped>
.prompt-line {
  margin: 0.75rem 0 0.4rem;
}

.output {
  margin: 0 0 0 1.2rem;
  min-height: 1.5em;
}

.name {
  color: var(--red);
  font-size: 1.8em;
}

.description {
  color: var(--comment);
}

.type-cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
