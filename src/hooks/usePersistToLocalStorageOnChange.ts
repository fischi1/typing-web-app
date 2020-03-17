import { useEffect } from "react"

const usePersistToLocalStorageOnChange = <T>(key: string, data: T) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data, key])
}

export default usePersistToLocalStorageOnChange
