import BaseService from './BaseService'

export default class UserSessionService extends BaseService {
    protected baseUrl = `${import.meta.env.BASE_URL}/UserSession`
}
