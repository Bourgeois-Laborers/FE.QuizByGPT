<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { PromptForm, NameModal } from '@/components/molecules'
import { BaseContainer } from '@/components/templates'
import { useUserSession } from '@/store'

const [isNameModal, onToggleNameModal] = useToggle()
const { isUserSessionActive, createUserSession } = useUserSession()

const onSubmitPrompt = (prompt: string) => {
    // TODO: send prompt to server
}

const onSubmitName = async (name: string) => {
    await createUserSession(name)
    onToggleNameModal()
}

if (!isUserSessionActive.value) {
    onToggleNameModal()
}
</script>

<template>
    <BaseContainer class="home-page">
        <h1 class="home-page__title mb-4 mt-0">{{ $t('app.home.header') }}</h1>
        <p class="home-page__subtitle mb-10">{{ $t('app.home.content') }}</p>

        <PromptForm @submit="onSubmitPrompt" />

        <NameModal v-if="isNameModal" @submit="onSubmitName" />
    </BaseContainer>
</template>

<style lang="scss">
.home-page {
    min-height: 100vh;
    padding-top: 10%;
}

.home-page__title {
    font-size: 3rem;
    line-height: 1.4;
    max-width: max-content;
}

.home-page__subtitle {
    font-size: 1.25rem;
}

@media (max-width: 767px) {
    .home-page__title {
        &::after {
            content: '|';
            color: var(--color-accent);
            animation: blink 0.75s infinite;
        }
    }
}

@media (min-width: 768px) {
    .home-page__title {
        font-size: 3.5rem;
        white-space: nowrap;
        overflow: hidden;
        border-right: var(--spacing-1) solid var(--color-accent);
        padding-right: var(--spacing-1);
        animation:
            typewriter 4s steps(44) 1 normal both,
            blink-border 0.75s infinite;
    }

    .home-page__subtitle {
        font-size: 1.5rem;
    }
}

@keyframes blink-border {
    0%,
    100% {
        border-color: var(--color-accent);
    }
    50% {
        border-color: transparent;
    }
}

@keyframes blink {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

@keyframes typewriter {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>
