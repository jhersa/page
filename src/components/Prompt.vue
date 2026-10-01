<script setup>
defineProps({
  path: {
    type: String,
    default: '~/suave.sh',
  },
  branch: {
    type: String,
    default: '',
  },
  dirty: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span class="p10k">
    <span class="seg seg-path" :class="{ 'seg-last': !branch }">{{ path }}</span>
    <span v-if="branch" class="seg seg-last" :class="dirty ? 'seg-dirty' : 'seg-clean'">{{ branch }}</span>
    <span class="arrow">&#10095;</span>
  </span>
</template>

<style scoped>
.p10k {
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  margin-right: 0.6em;
  font-size: 0.85em;
  vertical-align: middle;
}

.seg {
  padding: 0.15em 0.6em;
  color: var(--bg);
  white-space: nowrap;
}

.seg-path {
  background: var(--blue);
  border-radius: 4px 0 0 4px;
}

.seg-clean {
  background: var(--green);
}

.seg-dirty {
  background: var(--yellow);
}

.seg-last {
  border-radius: 0 4px 4px 0;
}

.arrow {
  color: var(--green);
  margin-left: 0.5em;
}
</style>
