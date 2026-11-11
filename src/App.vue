<script setup>
import TerminalWindow from './components/TerminalWindow.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Welcome from './components/Welcome.vue'
import Neofetch from './components/Neofetch.vue'
import Stack from './components/Stack.vue'
import ProjectsList from './components/ProjectsList.vue'
import Card from './components/Card.vue';
import Prompt from './components/Prompt.vue';
import { onMounted } from 'vue';

// La salida que carga fuera de pantalla se imprime al entrar en el viewport, sin el retraso inicial.
onMounted(() => {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.style.setProperty('--print-delay', '0ms');
      entry.target.classList.remove('print-pending');
      io.unobserve(entry.target);
    }
  }, { threshold: 0.15 });

  document.querySelectorAll('.print').forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add('print-pending');
      io.observe(el);
    }
  });
});

const links = [
  {
    id: 2,
    href: 'https://www.linkedin.com/in/jhersa/',
    iconSrc: 'linkedin.svg',
    label: 'LinkedIn',
    description: 'Trayectoria profesional.',
    color: 'var(--blue)',
    primary: true,
  },
  {
    id: 1,
    href: 'https://github.com/jhersa',
    iconSrc: 'github.svg',
    label: 'GitHub',
    description: 'Repos y proyectos.',
    color: 'var(--fg)',
  },
];
</script>

<template>
  <main class="windows">
    <TerminalWindow title="jhersa@suave.sh: ~" label="Presentación">
      <template #actions>
        <ThemeToggle />
      </template>

      <Welcome msg="Suave.SH" description="DevSecOps | SRE | Cloud Architect | Sysadmin." />

      <Neofetch />
    </TerminalWindow>

    <TerminalWindow title="jhersa@suave.sh: ~" label="Proyectos y enlaces">
      <Stack />

      <ProjectsList />

      <h2 class="sr-only">Enlaces</h2>
      <div class="prompt-line">
        <Prompt path="~/links" />bash ./links.sh
      </div>

      <div class="cards print" style="--print-delay: 1850ms">
        <Card
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          :iconSrc="link.iconSrc"
          :label="link.label"
          :description="link.description"
          :color="link.color"
          :primary="!!link.primary"
        />
      </div>

      <div class="prompt-line final">
        <Prompt path="~/page" branch="main" :modified="2" :untracked="1" /><span class="cursor" aria-hidden="true">&#9615;</span>
      </div>
    </TerminalWindow>
  </main>
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
</style>
