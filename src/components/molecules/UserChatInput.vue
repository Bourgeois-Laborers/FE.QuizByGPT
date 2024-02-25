<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const onUpdate = (value: string) => {
    emit('update:modelValue', value)
}

const textareaRef = ref<HTMLTextAreaElement | null>(null)

const onAutoResize = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
}

const onInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement
    onUpdate(target.value)
}

watch(
    () => props.modelValue,
    () => {
        if (textareaRef.value) {
            onAutoResize(textareaRef.value)
        }
    }
)
</script>

<template>
    <textarea
        ref="textareaRef"
        :value="props.modelValue"
        :rows="1"
        type="text"
        placeholder="Type a message..."
        class="user-chat__input"
        @input="onInput"
        @keydown.enter.prevent
    ></textarea>
</template>

<style lang="scss">
.user-chat__input {
    background: var(--color-background);
    color: var(--color-text);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--rounded-sm);
    padding: var(--spacing-2);
    transition: border-color 75ms ease-in-out;
    width: 100%;
    resize: none;
    font-size: var(--font-size);
    overflow: hidden;

    &::-webkit-scrollbar {
        display: none;
    }

    & {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    &:focus,
    &:focus-visible {
        border-color: var(--color-primary);
        box-shadow: var(--shadow-focused);
        outline: none;
    }

    &:disabled {
        filter: brightness(0.95);
    }
}
</style>
