import { useEffect } from "react"

const useCatchBackspace = () => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.keyCode === 8) {
                e.preventDefault()
                e.stopPropagation()
            }
        }

        document.addEventListener("keydown", handleKey, false)
        document.addEventListener("keyup", handleKey, false)
    }, [])
}

export default useCatchBackspace
