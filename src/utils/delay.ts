const delay = (callback: Function, ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback()
            resolve()
        }, ms)
    })
}

export default delay
