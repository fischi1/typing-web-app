import { useEffect } from "react"

const usePersistToLocalStorageOnChange = <T>(key: string, data : T) => {
    useEffect(()=> {
        console.log("store");
        localStorage.setItem(key, JSON.stringify(data));
    }, [data, key])
}

export default usePersistToLocalStorageOnChange;