<script setup>

const props = defineProps({
    accent: {
        type: String,
        required: true,
    },

    href: {
        type: String,
        required: true,
    },

    iconSrc: {
        type: String,
        required: true,
    },

    iconAlt: {
        type: String,
        required: true,
    },

    command: {
        type: String,
        required: true,
    },

    label: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <a class="cmd-line" :class="props.accent" :href="props.href" target="_blank" rel="noopener">
        <span class="prompt">$</span>
        <span class="cmd">open</span>
        <img class="icon" :src="props.iconSrc" :alt="props.iconAlt" fetchpriority="high" />
        <span class="arg">{{ props.command }}</span>
        <span class="hint">{{ props.label }}</span>
    </a>
</template>

<style scoped>
.cmd-line {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em 0.75em;
    border-radius: 4px;
    color: var(--fg);
    transition: background-color 0.15s;
}

.cmd-line:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--fg);
}

.prompt {
    color: var(--green);
    font-weight: 700;
}

.cmd {
    color: var(--cyan);
}

.icon {
    width: 16px;
    height: 16px;
    filter: grayscale(1) brightness(2);
    opacity: 0.85;
}

.arg {
    font-weight: 700;
}

.hint {
    margin-left: auto;
    color: var(--comment);
    font-size: 0.85em;
}

.accent-fg .arg {
    color: var(--fg);
}

.accent-blue .arg {
    color: var(--blue);
}

.accent-green .arg {
    color: var(--green);
}

.cmd-line:hover .arg {
    color: var(--yellow);
}
</style>
