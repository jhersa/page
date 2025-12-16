<script setup>
import Welcome from './components/Welcome.vue'
import LinkButton from './components/LinkButton.vue';

const linkButtons = [
  {
    id: 1,
    buttonClass: 'button-github',
    href: 'https://github.com/jhersa',
    iconSrc: 'github.svg',
    iconAlt: 'GitHub Logo',
    label: 'GitHub',
  },
  {
    id: 2,
    buttonClass: 'button-linkedin',
    href: 'https://www.linkedin.com/in/jhersa/',
    iconSrc: 'linkedin.svg',
    iconAlt: 'LinkedIn Logo',
    label: 'LinkedIn',
  },
  {
    id: 3,
    buttonClass: 'button-default',
    href: 'mailto:test@test.dev',
    iconSrc: 'email.svg',
    iconAlt: 'Email Icon',
    label: 'Email',
  },
];
</script>

<template>
  <div>
    <img src="/avatar.svg" class="logo" alt="Suave logo" />
  </div>
  <Welcome msg="Suave.SH" description="DevSecOps | SRE | Cloud Architect | Sysadmin." />

  <div class="link-section">
    <LinkButton v-for="link in linkButtons"
      :key="link.id"
      :buttonClass="link.buttonClass"
      :href="link.href"
      :iconSrc="link.iconSrc"
      :iconAlt="link.iconAlt"
      :label="link.label"
    />
  </div>
</template>

<style scoped>
.logo {
  height: 14em;
}

.logo:hover {
  filter: drop-shadow(0 0 2em rgb(250, 248, 241));
}

.link-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
}
</style>
