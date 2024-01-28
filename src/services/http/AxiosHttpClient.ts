import type { AxiosInstance } from 'axios'
import type { HttpClient, HttpClientResponse, HttpClientRequestOption } from './HttpClient'

export class AxiosHttpClient implements HttpClient {
    private readonly axios: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    async get<T = unknown>(
        path: string,
        options: HttpClientRequestOption = {}
    ): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.get<T>(path, options)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async post<T = unknown>(
        path: string,
        body: unknown,
        options: HttpClientRequestOption = {}
    ): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.post<T>(path, body, options)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async put<T = unknown>(
        path: string,
        body: unknown,
        options: HttpClientRequestOption = {}
    ): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.put<T>(path, body, options)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async patch<T = unknown>(
        path: string,
        body: unknown,
        options: HttpClientRequestOption = {}
    ): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.patch<T>(path, body, options)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }

    async delete<T = unknown>(
        path: string,
        options: HttpClientRequestOption = {}
    ): Promise<HttpClientResponse<T>> {
        try {
            const response = await this.axios.delete<T>(path, options)
            return [null, response.data]
        } catch (error: any) {
            return [error, null]
        }
    }
}
