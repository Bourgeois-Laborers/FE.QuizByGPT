<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import { UserChat } from '@/components/organisms'
import { BaseContainer } from '@/components/templates'
import { useUserSession, useUserChat } from '@/store'
import { delay } from '@/utils'
import { UserChatParticipant } from '@/models'
import type { UserMessage } from '@/models'

const { userName, setUserName } = useUserSession()
const { state: userChatState, addMessage } = useUserChat()
const { t } = useI18n()

const isAnswering = ref(true)

const onWelcome = () => {
    addMessage({
        id: String(Date.now()),
        text: t('app.home.chat.welcomeMessage'),
        createdAt: new Date(),
        createdBy: UserChatParticipant.Bot
    })
}

const onAskName = () => {
    addMessage({
        id: String(Date.now()),
        text: t('app.home.chat.askForName'),
        createdAt: new Date(),
        createdBy: UserChatParticipant.Bot
    })
}

const onAskTopic = () => {
    addMessage({
        id: String(Date.now()),
        text: t('app.home.chat.askForTopic').replace('{userName}', userName.value || ''),
        createdAt: new Date(),
        createdBy: UserChatParticipant.Bot
    })
}

const onSendMessage = async (message: UserMessage) => {
    isAnswering.value = true
    if (!userName.value) {
        addMessage(message)
        setUserName(message.text)
        await delay(onAskTopic, 1500)
    } else {
        // TODO: Add logic to handle the user's topic input
    }
    isAnswering.value = false
}

onMounted(async () => {
    onWelcome()

    if (!userName.value) {
        await delay(onAskName, 1500)
    } else {
        await delay(onAskTopic, 1500)
    }

    isAnswering.value = false
})
</script>

<template>
    <BaseContainer class="home-page">
        <h1 class="home-page__title mb-4 mt-0">{{ $t('app.home.header') }}</h1>
        <p class="home-page__subtitle mb-6">{{ $t('app.home.content') }}</p>

        <UserChat
            :messages="userChatState.messages"
            :disabled="isAnswering"
            class="home-page__chat"
            @send="onSendMessage"
        />
    </BaseContainer>
</template>

<style lang="scss">
.home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.home-page__title {
    font-size: 1.5rem;
    line-height: 1.4;
    max-width: max-content;
}

.home-page__subtitle {
    font-size: 0.875rem;
}

.home-page__chat {
    flex: 1;
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
        font-size: 2.75rem;
        white-space: nowrap;
        overflow: hidden;
        border-right: var(--spacing-1) solid var(--color-accent);
        padding-right: var(--spacing-1);
        animation:
            typewriter 4s steps(44) 1 normal both,
            blink-border 0.75s infinite;
    }

    .home-page__subtitle {
        font-size: 1.25rem;
    }
}

@media (min-width: 1024px) {
    .home-page {
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .home-page__title {
        font-size: 3.5rem;
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
