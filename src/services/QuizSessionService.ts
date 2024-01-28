import BaseService from './BaseService'
import type { QuizSession } from '@/models'

class QuizSessionService extends BaseService {
    protected baseUrl = `${import.meta.env.VITE_API_URL}/QuizSession`
}

const QuizSessionServiceInstance = new QuizSessionService()

export default QuizSessionServiceInstance
