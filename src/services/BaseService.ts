import type { HttpClient } from './http/HttpClient'
import { AxiosHttpClient } from './http/AxiosHttpClient'
import { AxiosPlugin } from '@/plugins'

export default class BaseService {
    protected http: HttpClient
    protected baseUrl: string

    constructor(baseUrl: string) {
        this.http = new AxiosHttpClient(AxiosPlugin)
        this.baseUrl = baseUrl
    }

    get<T>(path: string) {
        return this.http.get<T>(this.baseUrl + path)
    }

    post<T>(path: string, body: any) {
        return this.http.post<T>(this.baseUrl + path, body)
    }

    put<T>(path: string, body: any) {
        return this.http.put<T>(this.baseUrl + path, body)
    }

    patch<T>(path: string, body: any) {
        return this.http.patch<T>(this.baseUrl + path, body)
    }

    delete(path: string) {
        return this.http.delete(this.baseUrl + path)
    }
}
