<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton, BaseLabel, BaseTextarea } from '@/components/atoms'

const emit = defineEmits<{
    (e: 'submit', prompt: string): void
}>()

const prompt = ref('')

const onSubmitPrompt = () => {
    emit('submit', prompt.value.trim())
}
</script>

<template>
    <form class="prompt-form" @submit.prevent="onSubmitPrompt">
        <BaseLabel id="prompt" class="mb-1">{{ $t('app.home.prompt.label') }}</BaseLabel>
        <BaseTextarea
            v-model="prompt"
            id="prompt"
            :placeholder="$t('app.home.prompt.placeholder')"
            :rows="8"
            class="mb-4"
        />
        <BaseButton type="submit">{{ $t('app.home.prompt.submit') }}</BaseButton>
    </form>
</template>

<style lang="scss">
.prompt-form {
    display: flex;
    flex-direction: column;
}
</style>
