import BaseService from './BaseService'
import type { UserSession } from '@/models'

class UserSessionService extends BaseService {
    protected baseUrl = `${import.meta.env.VITE_API_URL}/UserSession`

    public createSession(userSession: UserSession) {
        return this.post<UserSession>('', userSession)
    }
}

const UserSessionServiceInstance = new UserSessionService()

export default UserSessionServiceInstance
