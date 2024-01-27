export type HttpClientResponse<T> = [null, T] | [Error, null]

export interface HttpClient {
    get<T = unknown>(path: string, params?: Record<string, unknown>): Promise<HttpClientResponse<T>>
    post<T = unknown>(path: string, body: unknown): Promise<HttpClientResponse<T>>
    put<T = unknown>(path: string, body: unknown): Promise<HttpClientResponse<T>>
    patch<T = unknown>(path: string, body: unknown): Promise<HttpClientResponse<T>>
    delete<T = unknown>(path: string): Promise<HttpClientResponse<T>>
}
