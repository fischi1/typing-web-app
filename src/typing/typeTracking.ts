export type ListenerFunction = {
    (key: string): void
}

var onKeyDown: ListenerFunction | null

export const registerListener = (func: ListenerFunction) => {
    onKeyDown = func
}

export const unregisterListener = () => {
    onKeyDown = null
}

export const ttKeyPressed = (key: string) => {
    if (!onKeyDown) return

    onKeyDown(key)
}
