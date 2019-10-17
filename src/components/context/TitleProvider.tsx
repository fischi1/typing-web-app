import React, { createContext, FC, useContext, useState, useEffect } from "react";

type Dispatch = (title: string) => void;
type State = string;

const TitleStateContext = createContext<State | undefined>(undefined)
const TitleDispatchContext = createContext<Dispatch | undefined>(undefined);

const TitleProvider: FC<{}> = ({children}) => {
    
    const [title, setTitle] = useState("");
  
    return (
        <TitleStateContext.Provider value={title}>
            <TitleDispatchContext.Provider value={setTitle}>
                {children}
            </TitleDispatchContext.Provider>
        </TitleStateContext.Provider>
    )
}

const useTitleState = () => {
    const context = useContext(TitleStateContext)
    if (context === undefined) {
        throw new Error('useTitleState must be used within a TitleProvider')
    }
    return context;
}

const useTitleDispatch = () => {
    const context = React.useContext(TitleDispatchContext)
    if (context === undefined) {
        throw new Error('useTitleDispatch must be used within a TitleProvider')
    }
    return context;
}

const useSetTitleOnMount = (title: string) => {
    const setTitle = useTitleDispatch();
    
    useEffect(() => {
        setTitle(title);
    }, [setTitle, title]);
}

export default TitleProvider;
export { useTitleState, useTitleDispatch, useSetTitleOnMount };

