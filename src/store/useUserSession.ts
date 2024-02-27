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

    const userName = computed(() => state.name)

    const setUserName = (name: string) => {
        state.name = name
    }

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
        userName,

        setUserName,
        createUserSession
    }
})

export default useUserSession
