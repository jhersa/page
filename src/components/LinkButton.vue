<script setup>

const props = defineProps({
    buttonClass: {
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

    label: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <a class="button" :class="props.buttonClass" :href="props.href" target="_blank" rel="noopener">
        <img class="icon" :src="props.iconSrc" :alt="props.iconAlt" fetchpriority="high" />
        {{ props.label }}
    </a>
</template>

<style scoped>
.button,
button {
    display: inline-block;
    text-decoration: none;
    height: 48px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    width: 300px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.1px;
    white-space: wrap;
    border-radius: 8px;
    cursor: pointer;
}

button:hover,
.button:focus {
    color: #333;
    border-color: #888;
    outline: 0;
}

.button.button-primary {
    color: #FFF;
    filter: brightness(90%)
}

.button.button-primary:hover,
.button.button-primary:focus {
    color: #FFF;
    filter: brightness(90%)
}

.icon {
    padding: 0px 8px 3.5px 0px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

.button.button-default {
    color: #FFFFFF;
    background-color: #0085FF
}

.button.button-default:hover,
.button.button-default:focus {
    filter: brightness(90%)
}


/* Github */
.button.button-github {
    color: #FFFFFF;
    background-color: #000000
}

.button.button-github:hover,
.button.button-github:focus {
    filter: brightness(90%)
}

/* LinkedIn */
.button.button-linkedin {
    color: #FFFFFF;
    background-color: #2867B2
}

.button.button-linkedin:hover,
.button.button-linkedin:focus {
    filter: brightness(90%)
}

/* Minecraft */
.button.button-minecraft {
    color: #FFFFFF;
    background-color: #558B2F
}

.button.button-reddit:hover,
.button.button-reddit:focus {
    filter: brightness(90%)
}
</style>