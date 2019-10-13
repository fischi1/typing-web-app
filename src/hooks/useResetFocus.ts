import { useEffect } from "react";

const useResetFocus = () => {
    useEffect(() => {        
        if(document.activeElement)
            (document.activeElement as HTMLElement).blur();
    }, []);
};

export default useResetFocus;
