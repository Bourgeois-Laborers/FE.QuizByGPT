import type { HttpClient, HttpClientRequestOption } from './http/HttpClient'
import { AxiosHttpClient } from './http/AxiosHttpClient'
import { AxiosPlugin } from '@/plugins'

const HttpClientInstance = new AxiosHttpClient(AxiosPlugin)

export default class BaseService {
    protected http: HttpClient = HttpClientInstance
    protected baseUrl: string = import.meta.env.VITE_API_URL

    protected get<T = unknown>(path: string, options: HttpClientRequestOption = {}) {
        return this.http.get<T>(this.baseUrl + path, options)
    }

    protected post<T = unknown>(path: string, body: any, options: HttpClientRequestOption = {}) {
        return this.http.post<T>(this.baseUrl + path, body, options)
    }

    protected put<T = unknown>(path: string, body: any, options: HttpClientRequestOption = {}) {
        return this.http.put<T>(this.baseUrl + path, body, options)
    }

    protected patch<T = unknown>(path: string, body: any, options: HttpClientRequestOption = {}) {
        return this.http.patch<T>(this.baseUrl + path, body, options)
    }

    protected delete<T = unknown>(path: string, options: HttpClientRequestOption = {}) {
        return this.http.delete<T>(this.baseUrl + path, options)
    }
}
