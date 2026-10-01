<script setup>
import Prompt from './Prompt.vue';
import { useTypewriter } from '../composables/useTypewriter';

const props = defineProps({
  msg: String,
  description: String,
})

const { display: typedMsg, done: msgDone } = useTypewriter(props.msg, { speed: 90 });
const { display: typedDescription, done: descDone } = useTypewriter(props.description, {
  speed: 20,
  delay: props.msg.length * 90 + 400,
});
</script>

<template>
  <div class="prompt-line">
    <Prompt path="~" />whoami
  </div>
  <h1 class="output name">
    {{ typedMsg }}<span v-if="!msgDone" class="type-cursor">&#9615;</span>
  </h1>

  <div class="prompt-line">
    <Prompt path="~" />cat role.txt
  </div>
  <p class="output description">
    {{ typedDescription }}<span v-if="msgDone && !descDone" class="type-cursor">&#9615;</span>
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
