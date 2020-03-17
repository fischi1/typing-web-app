import { useEffect } from "react"

function useKeyEvents(
    callbackUp: (e: KeyboardEvent) => void,
    callbackDown: (e: KeyboardEvent) => void
) {
    useEffect(() => {
        const callbackDownWrapRef = (e: KeyboardEvent) => {
            if (!e.repeat) callbackDown(e)
        }
        document.body.addEventListener("keyup", callbackUp)
        document.body.addEventListener("keydown", callbackDownWrapRef)
        return () => {
            document.body.removeEventListener("keyup", callbackUp)
            document.body.removeEventListener("keydown", callbackDownWrapRef)
        }
    }, [callbackUp, callbackDown])
}

export default useKeyEvents
