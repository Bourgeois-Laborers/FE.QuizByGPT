<script setup lang="ts">
import { PromptForm } from '@/components/organisms'
import { BaseContainer } from '@/components/templates'

const onSendPrompt = (prompt: string) => {
    console.log(prompt)
}
</script>

<template>
    <BaseContainer>
        <h1 class="mb-6">{{ $t('app.home.header') }}</h1>
        <p class="mb-10">{{ $t('app.home.content') }}</p>

        <PromptForm @submit="onSendPrompt" />
    </BaseContainer>
</template>
