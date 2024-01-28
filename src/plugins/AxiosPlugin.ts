import axios from 'axios'
import { v4 as uuid } from 'uuid'

const axiosInstance = axios.create({})

axiosInstance.interceptors.request.use((config) => {
    config.headers.set('X-Client-Id', import.meta.env.VITE_CLIENT_ID)
    config.headers.set('X-Client-Secret', import.meta.env.VITE_CLIENT_SECRET)
    config.headers.set('X-Request-Id', uuid())

    return config
})

export default axiosInstance
