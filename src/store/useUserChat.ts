import { reactive } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import type { UserMessage } from '@/models'

interface UserChatState {
    messages: UserMessage[]
}

const useUserSession = createSharedComposable(() => {
    const state = reactive<UserChatState>({
        messages: []
    })

    const addMessage = (message: UserMessage) => {
        state.messages.push(message)
    }

    return {
        state,
        addMessage
    }
})

export default useUserSession
