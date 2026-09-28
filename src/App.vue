<script setup>
import Welcome from './components/Welcome.vue'
import LinkButton from './components/LinkButton.vue';

const linkButtons = [
  {
    id: 1,
    accent: 'accent-fg',
    href: 'https://github.com/jhersa',
    iconSrc: 'github.svg',
    iconAlt: 'GitHub Logo',
    command: 'github',
    label: 'GitHub',
  },
  {
    id: 2,
    accent: 'accent-blue',
    href: 'https://www.linkedin.com/in/jhersa/',
    iconSrc: 'linkedin.svg',
    iconAlt: 'LinkedIn Logo',
    command: 'linkedin',
    label: 'LinkedIn',
  },
  {
    id: 3,
    accent: 'accent-green',
    href: 'mailto:test@test.dev',
    iconSrc: 'email.svg',
    iconAlt: 'Email Icon',
    command: 'mail',
    label: 'Email',
  },
];
</script>

<template>
  <div class="terminal">
    <div class="terminal-header">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="terminal-title">jhersa@suave.sh: ~</span>
    </div>

    <div class="terminal-body">
      <img src="/avatar.svg" class="avatar" alt="Suave logo" />

      <Welcome msg="Suave.SH" description="DevSecOps | SRE | Cloud Architect | Sysadmin." />

      <p class="prompt-line">
        <span class="prompt">$</span> ls ~/links
      </p>

      <div class="link-section">
        <LinkButton v-for="link in linkButtons"
          :key="link.id"
          :accent="link.accent"
          :href="link.href"
          :iconSrc="link.iconSrc"
          :iconAlt="link.iconAlt"
          :command="link.command"
          :label="link.label"
        />
      </div>

      <p class="prompt-line">
        <span class="prompt">$</span><span class="cursor">▌</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.terminal {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg-panel);
  border: 1px solid #000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-header);
  border-bottom: 1px solid #000;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot-red {
  background: var(--red);
}

.dot-yellow {
  background: var(--yellow);
}

.dot-green {
  background: var(--green);
}

.terminal-title {
  margin-left: 8px;
  color: var(--comment);
  font-size: 0.85rem;
}

.terminal-body {
  padding: 2rem 1.5rem 2.5rem;
  text-align: left;
}

.avatar {
  display: block;
  height: 6em;
  margin: 0 auto 1.5rem;
}

.avatar:hover {
  filter: drop-shadow(0 0 1.2em var(--green));
}

.prompt-line {
  margin: 1.5rem 0 0.75rem;
  color: var(--fg);
}

.prompt {
  color: var(--green);
  font-weight: 700;
  margin-right: 0.5em;
}

.cursor {
  color: var(--fg);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.link-section {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
}

@media (max-width: 480px) {
  .terminal-body {
    padding: 1.5rem 1rem 2rem;
  }
}
</style>
