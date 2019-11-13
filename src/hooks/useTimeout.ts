import { useEffect, useState } from "react";

const useTimeoutOnMount = (delayMS: number) => {

    const [ timedOut, setTimedOut ] = useState(false);

    useEffect(() => {

        if(delayMS <= 0) {
            setTimedOut(true);
            return;
        }

        const timeout = setTimeout(() => setTimedOut(true), delayMS);

        return () => {
            clearTimeout(timeout);
        }
    }, [delayMS])

    return timedOut;
}

export default useTimeoutOnMount;