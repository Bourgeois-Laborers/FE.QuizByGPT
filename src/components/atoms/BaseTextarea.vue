<script setup lang="ts">
const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <textarea
        :value="props.modelValue"
        class="component-textarea"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>
</template>

<style lang="scss">
.component-textarea {
    background: var(--color-background);
    color: var(--color-text);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--rounded-sm);
    padding: var(--spacing-2);
    transition: border-color 75ms ease-in-out;
}

.component-textarea:focus,
.component-textarea:focus-visible {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focused);
    outline: none;
}

.component-textarea:disabled {
    filter: brightness(0.95);
}
</style>
