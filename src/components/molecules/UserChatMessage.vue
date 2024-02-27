<script setup lang="ts">
const props = defineProps<{
    message: string
    createdAt: Date
    createdBy: string
}>()
</script>

<template>
    <div class="chat-message">
        <h4 class="mt-0 mb-1">{{ props.createdBy }}</h4>
        <p class="my-0">{{ props.message }}</p>
    </div>
</template>

<style lang="scss">
.chat-message {
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--rounded-md);
    padding: var(--spacing-2);
    box-shadow: var(--shadow-sm);
}
</style>
