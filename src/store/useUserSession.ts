import { reactive, computed } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import { v4 as uuid } from 'uuid'
import { UserSessionService } from '@/services'

interface UserSessionState {
    id: string | null
    name: string | null
}

const useUserSession = createSharedComposable(() => {
    const state = reactive<UserSessionState>({
        id: null,
        name: null
    })

    const isUserSessionActive = computed<boolean>(() => state.id !== null && state.name !== null)

    const createUserSession = async (name: string) => {
        try {
            const session = {
                id: uuid(),
                name
            }

            await UserSessionService.createSession(session)

            state.id = session.id
            state.name = session.name
        } catch (error) {
            console.error(error)
        }
    }

    return {
        state,
        isUserSessionActive,
        createUserSession
    }
})

export default useUserSession
