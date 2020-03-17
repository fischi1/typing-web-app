const forceToNull = <T>(): T => {
    return (null as unknown) as T
}

export default forceToNull
