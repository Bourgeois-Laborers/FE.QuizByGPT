<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        type: 'button' | 'submit' | 'reset'
    }>(),
    {
        type: 'button'
    }
)

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
    <button :type="props.type" class="component-button" @click="emit('click', $event)">
        <slot></slot>
    </button>
</template>

<style lang="scss">
.component-button {
    padding: var(--spacing-3);
    background: var(--color-primary);
    border: var(--border-width) solid var(--color-primary);
    border-radius: var(--rounded-sm);
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    border: none;
    cursor: pointer;
    transition:
        border-color,
        filter 75ms ease-in-out;
}

.component-button:focus,
.component-button:focus-visible {
    box-shadow: var(--shadow-focused);
    outline: none;
}

.component-button:hover {
    filter: brightness(0.95);
}

.component-button:active {
    filter: brightness(0.9);
}

.component-button:disabled {
    filter: brightness(0.8);
    cursor: default;
}
</style>
