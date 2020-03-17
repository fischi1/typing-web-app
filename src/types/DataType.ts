export type DataType<T> = {
    data: Record<string, T | undefined>
    allIds: string[]
}
