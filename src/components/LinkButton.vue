<script setup>
import { formatLsDate, formatLsSize } from '../lib/ls';

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

const mtime = formatLsDate();
</script>

<template>
    <a class="ls-row" :class="props.accent" :href="props.href" target="_blank" rel="noopener">
        <span class="meta">
            <span class="perms">-rwxr-xr-x</span>
            <span class="owner">jhersa</span>
            <span class="group">staff</span>
            <span class="size">{{ formatLsSize(props.href.length) }}</span>
            <span class="date">{{ mtime }}</span>
        </span>
        <span class="name">
            <img class="icon" :src="props.iconSrc" :alt="props.iconAlt" fetchpriority="high" />
            <span class="arg">{{ props.command }}</span>
        </span>
        <span class="hint">{{ props.label }}</span>
    </a>
</template>

<style scoped>
.ls-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 0.75em;
    row-gap: 0.15em;
    padding: 0.3em 0.75em;
    border-radius: 4px;
    color: var(--fg);
    font-size: 0.9em;
    transition: background-color 0.15s;
}

.ls-row:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--fg);
}

.meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75em;
    color: var(--comment);
}

.perms {
    color: var(--magenta);
}

.name {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
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
    font-size: 0.9em;
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

.ls-row:hover .arg {
    color: var(--orange);
}

@media (max-width: 600px) {
    .owner,
    .group {
        display: none;
    }
}
</style>
