import type { HttpClient } from './http/HttpClient'
import { AxiosHttpClient } from './http/AxiosHttpClient'
import { AxiosPlugin } from '@/plugins'

const HttpClientInstance = new AxiosHttpClient(AxiosPlugin)

export default class BaseService {
    protected http: HttpClient
    protected baseUrl: string

    constructor(baseUrl: string) {
        this.http = HttpClientInstance
        this.baseUrl = baseUrl
    }

    get<T = unknown>(path: string) {
        return this.http.get<T>(this.baseUrl + path)
    }

    post<T = unknown>(path: string, body: any) {
        return this.http.post<T>(this.baseUrl + path, body)
    }

    put<T = unknown>(path: string, body: any) {
        return this.http.put<T>(this.baseUrl + path, body)
    }

    patch<T = unknown>(path: string, body: any) {
        return this.http.patch<T>(this.baseUrl + path, body)
    }

    delete<T = unknown>(path: string) {
        return this.http.delete<T>(this.baseUrl + path)
    }
}
