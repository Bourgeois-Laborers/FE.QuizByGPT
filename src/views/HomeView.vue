<script setup lang="ts">
import { PromptForm } from '@/components/organisms'
import { BaseContainer } from '@/components/templates'

const onSendPrompt = (prompt: string) => {
    console.log(prompt)
}
</script>

<template>
    <BaseContainer class="home-page">
        <h1 class="home-page__title mb-4 mt-0">{{ $t('app.home.header') }}</h1>
        <p class="home-page__subtitle mb-10">{{ $t('app.home.content') }}</p>

        <PromptForm @submit="onSendPrompt" />
    </BaseContainer>
</template>

<style lang="scss">
.home-page {
    min-height: 100vh;
    padding-top: 10%;
}

.home-page__title {
    font-size: 3.5rem;
    line-height: 1.4;
    max-width: max-content;
    overflow: hidden;
    white-space: nowrap;
    border-right: var(--spacing-1) solid var(--color-accent);
    padding-right: var(--spacing-1);
    animation:
        typing 3.5s steps(30, end),
        blink-caret 0.75s step-end infinite;

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: var(--color-accent);
        }
    }
}

.home-page__subtitle {
    font-size: 1.25rem;
    line-height: 1.5;
}
</style>
