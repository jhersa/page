<script setup>
defineProps({
  path: {
    type: String,
    default: '~',
  },
  branch: {
    type: String,
    default: '',
  },
  modified: {
    type: Number,
    default: 0,
  },
  untracked: {
    type: Number,
    default: 0,
  },
  ok: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="ctx-line">
    <span class="nf os-icon">&#xf306;</span>
    <span class="nf dir-icon">&#xf07c;</span>
    <span class="path">{{ path }}</span>
    <template v-if="branch">
      <span class="connector">on</span>
      <span class="nf branch-icon">&#xe725;</span>
      <span class="branch">{{ branch }}</span>
      <span v-if="modified" class="modified">!{{ modified }}</span>
      <span v-if="untracked" class="untracked">?{{ untracked }}</span>
    </template>
  </div>
  <span class="arrow" :class="ok ? 'arrow-ok' : 'arrow-err'">&#10095;</span>
</template>

<style scoped>
.ctx-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4em;
  color: var(--comment);
  font-size: 0.85em;
  margin-bottom: 0.15rem;
}

.nf {
  font-family: "Symbols Nerd Font";
}

.os-icon {
  color: #a81d33;
}

.dir-icon {
  color: var(--blue);
}

.path {
  color: var(--blue);
  font-weight: 700;
}

.connector {
  color: var(--comment);
}

.branch-icon,
.branch {
  color: var(--green);
}

.branch {
  font-weight: 700;
}

.modified {
  color: var(--yellow);
}

.untracked {
  color: var(--cyan);
}

.arrow {
  font-weight: 700;
  margin-right: 0.6em;
}

.arrow-ok {
  color: var(--green);
}

.arrow-err {
  color: var(--red);
}
</style>
