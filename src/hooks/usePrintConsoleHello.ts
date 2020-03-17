import { useEffect } from "react"

const usePrintConsoleHello = () =>
    useEffect(() => {
        console.log(
            "\n" +
                " ______   __     ______     ______     __  __     __    \n" +
                "/\\  ___\\ /\\ \\   /\\  ___\\   /\\  ___\\   /\\ \\_\\ \\   /\\ \\   \n" +
                "\\ \\  __\\ \\ \\ \\  \\ \\___  \\  \\ \\ \\____  \\ \\  __ \\  \\ \\ \\  \n" +
                " \\ \\_\\    \\ \\_\\  \\/\\_____\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\ \n" +
                "  \\/_/     \\/_/   \\/_____/   \\/_____/   \\/_/\\/_/   \\/_/ \n\n" +
                "                                https://lukasfischer.me",
            "\n "
        )
    }, [])

export default usePrintConsoleHello
