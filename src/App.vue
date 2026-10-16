<script setup>
import TerminalWindow from './components/TerminalWindow.vue'
import Welcome from './components/Welcome.vue'
import Neofetch from './components/Neofetch.vue'
import Stack from './components/Stack.vue'
import ProjectsList from './components/ProjectsList.vue'
import LinkButton from './components/LinkButton.vue';
import Prompt from './components/Prompt.vue';

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
  <div class="windows">
    <TerminalWindow title="jhersa@suave.sh: ~">
      <Welcome msg="Suave.SH" description="DevSecOps | SRE | Cloud Architect | Sysadmin." />

      <Neofetch />
    </TerminalWindow>

    <TerminalWindow title="jhersa@suave.sh: ~/stack">
      <Stack />

      <ProjectsList />

      <div class="prompt-line">
        <Prompt path="~/links" />ls -lha
      </div>

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

      <div class="prompt-line final">
        <Prompt path="~/page" branch="main" :modified="2" :untracked="1" /><span class="cursor">&#9615;</span>
      </div>
    </TerminalWindow>
  </div>
</template>

<style scoped>
.windows {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.prompt-line {
  margin: 1.5rem 0 0.75rem;
  color: var(--fg);
}

.prompt-line.final {
  margin-bottom: 0;
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
</style>
