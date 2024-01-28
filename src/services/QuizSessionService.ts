import BaseService from './BaseService'
import type { QuizSession } from '@/models'

export default class QuizSessionService extends BaseService {
    protected baseUrl = `${import.meta.env.VITE_API_URL}/QuizSession`
}
