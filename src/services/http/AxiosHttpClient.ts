import type { AxiosInstance } from 'axios'
import type { HttpClient, HttpClientResponse } from './HttpClient'

export class AxiosHttpClient implements HttpClient {
    private readonly axios: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    async get<T = unknown>(
        path: string,
        params?: Record<string, unknown>
    ): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.get<T>(path, { params })
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async post<T = unknown>(path: string, body: unknown): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.post<T>(path, body)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async put<T = unknown>(path: string, body: unknown): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.put<T>(path, body)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async patch<T = unknown>(path: string, body: unknown): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.patch<T>(path, body)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async delete<T = unknown>(path: string): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.delete<T>(path)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }
}
