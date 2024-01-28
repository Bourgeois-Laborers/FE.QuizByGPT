import BaseService from './BaseService'
import type { UserSession } from '@/models'

export default class UserSessionService extends BaseService {
    protected baseUrl = `${import.meta.env.VITE_API_URL}/UserSession`
}
