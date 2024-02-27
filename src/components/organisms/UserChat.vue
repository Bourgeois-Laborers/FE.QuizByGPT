<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton } from '@/components/atoms'
import { UserChatMessage, UserChatInput } from '@/components/molecules'
import { UserChatParticipant } from '@/models'
import type { UserMessage } from '@/models'

const props = defineProps<{
    messages: UserMessage[]
    disabled?: boolean
}>()

const emit = defineEmits<{
    (e: 'send', message: UserMessage): void
}>()

const inputValue = ref('')

const onSendMessage = () => {
    const newMessage: UserMessage = {
        id: String(Date.now()),
        text: inputValue.value,
        createdAt: new Date(),
        createdBy: UserChatParticipant.User
    }
    emit('send', newMessage)
    inputValue.value = ''
}
</script>

<template>
    <div class="user-chat__wrapper">
        <div class="user-chat__messages">
            <TransitionGroup name="list">
                <UserChatMessage
                    v-for="message in props.messages"
                    :key="message.id"
                    :message="message.text"
                    :created-at="message.createdAt"
                    :created-by="message.createdBy"
                    class="user-chat__message"
                    :class="{
                        'user-chat__message--right': message.createdBy === UserChatParticipant.User
                    }"
                />
            </TransitionGroup>
        </div>

        <form class="user_chat__form" @submit.prevent="onSendMessage">
            <UserChatInput v-model.trim="inputValue" :disabled="props.disabled" />
            <BaseButton type="submit" :disabled="props.disabled">Send</BaseButton>
        </form>
    </div>
</template>

<style lang="scss">
.user-chat__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: var(--spacing-3);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--rounded-md);
    padding: var(--spacing-3);
    box-shadow: var(--shadow-md);
}

.user-chat__messages {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}

.user-chat__message {
    width: 85%;

    &--right {
        align-self: flex-end;
    }
}

.user_chat__form {
    display: flex;
    gap: var(--spacing-3);
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
