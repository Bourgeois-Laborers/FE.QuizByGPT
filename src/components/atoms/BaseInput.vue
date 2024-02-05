<script setup lang="ts">
const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <input
        :value="props.modelValue"
        class="component-input"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
</template>

<style lang="scss">
.component-input {
    background: var(--color-background);
    color: var(--color-text);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--rounded-sm);
    padding: var(--spacing-2);
    transition: border-color 75ms ease-in-out;
}

.component-input:focus,
.component-input:focus-visible {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focused);
    outline: none;
}

.component-input:disabled {
    filter: brightness(0.95);
}
</style>
