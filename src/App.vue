<script setup>
import TerminalWindow from './components/TerminalWindow.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Welcome from './components/Welcome.vue'
import Neofetch from './components/Neofetch.vue'
import Stack from './components/Stack.vue'
import ProjectsList from './components/ProjectsList.vue'
import Card from './components/Card.vue';
import Prompt from './components/Prompt.vue';

const links = [
  {
    id: 1,
    href: 'https://github.com/jhersa',
    iconSrc: 'github.svg',
    iconAlt: 'GitHub Logo',
    label: 'GitHub',
    description: 'Repos y proyectos.',
    color: 'var(--fg)',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/jhersa/',
    iconSrc: 'linkedin.svg',
    iconAlt: 'LinkedIn Logo',
    label: 'LinkedIn',
    description: 'Trayectoria profesional.',
    color: 'var(--blue)',
  },
  {
    id: 3,
    href: 'mailto:test@test.dev',
    iconSrc: 'email.svg',
    iconAlt: 'Email Icon',
    label: 'Email',
    description: 'Hablemos.',
    color: 'var(--green)',
  },
];
</script>

<template>
  <div class="windows">
    <TerminalWindow title="jhersa@suave.sh: ~">
      <template #actions>
        <ThemeToggle />
      </template>

      <Welcome msg="Suave.SH" description="DevSecOps | SRE | Cloud Architect | Sysadmin." />

      <Neofetch />
    </TerminalWindow>

    <TerminalWindow title="jhersa@suave.sh: ~/stack">
      <Stack />

      <ProjectsList />

      <div class="prompt-line">
        <Prompt path="~/links" />bash ./links.sh
      </div>

      <div class="cards">
        <Card
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          :iconSrc="link.iconSrc"
          :iconAlt="link.iconAlt"
          :label="link.label"
          :description="link.description"
          :color="link.color"
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

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
