export const clamp = (val: number): number => {
    return Math.min(1, Math.max(0, val))
}

export const lerp = (from: number, to: number, t: number): number => {
    return to * t + from * (1 - t)
}
