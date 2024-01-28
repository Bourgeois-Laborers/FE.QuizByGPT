export type HttpClientResponse<T> = [null, T] | [Error, null]

export type HttpClientRequestOption = {
    headers?: Record<string, string>
    params?: Record<string, unknown>
}

export interface HttpClient {
    get<T = unknown>(
        path: string,
        options?: HttpClientRequestOption
    ): Promise<HttpClientResponse<T>>
    post<T = unknown>(
        path: string,
        body: unknown,
        options?: HttpClientRequestOption
    ): Promise<HttpClientResponse<T>>
    put<T = unknown>(
        path: string,
        body: unknown,
        options?: HttpClientRequestOption
    ): Promise<HttpClientResponse<T>>
    patch<T = unknown>(
        path: string,
        body: unknown,
        options?: HttpClientRequestOption
    ): Promise<HttpClientResponse<T>>
    delete<T = unknown>(
        path: string,
        options?: HttpClientRequestOption
    ): Promise<HttpClientResponse<T>>
}
