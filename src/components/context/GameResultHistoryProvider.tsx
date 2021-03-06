import React, { createContext, FC, useContext, useReducer } from "react"
import loadFromLocalStorage from "../../functions/loadFromLocalStorage"
import usePersistToLocalStorageOnChange from "../../hooks/usePersistToLocalStorageOnChange"
import { GameResultType } from "../../types/GameResultType"

type State = {
    history: GameResultType[]
}

type Action =
    | { type: "add"; payload: GameResultType }
    | { type: "clear" }
    | { type: "setState"; payload: State }

type Dispatch = (action: Action) => void

const GameResultHistoryStateContext = createContext<State | undefined>(
    undefined
)
const GameResultHistoryDispatchContext = createContext<Dispatch | undefined>(
    undefined
)

const LOCAL_STORAGE_KEY = "gameResultHistory"

const gameResultHistoryReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "add":
            return { history: [...state.history, action.payload] }
        case "clear":
            return { history: [] }
        case "setState":
            return action.payload
    }
}

const getInitialData = () => {
    const data = loadFromLocalStorage<State>(LOCAL_STORAGE_KEY, { history: [] })
    data.history = data.history.map(oldHistory => ({
        ...oldHistory,
        date: new Date(oldHistory.date)
    }))
    return data
}

const GameResultHistoryProvider: FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(
        gameResultHistoryReducer,
        getInitialData()
    )

    usePersistToLocalStorageOnChange(LOCAL_STORAGE_KEY, state)

    return (
        <GameResultHistoryStateContext.Provider value={state}>
            <GameResultHistoryDispatchContext.Provider value={dispatch}>
                {children}
            </GameResultHistoryDispatchContext.Provider>
        </GameResultHistoryStateContext.Provider>
    )
}

const useGameResultHistoryState = () => {
    const context = useContext(GameResultHistoryStateContext)
    if (context === undefined) {
        throw new Error(
            "useGameResultHistoryState must be used within a GameResultHistoryProvider"
        )
    }
    return context
}

const useGameResultHistoryDispatch = () => {
    const context = React.useContext(GameResultHistoryDispatchContext)
    if (context === undefined) {
        throw new Error(
            "useGameResultHistoryDispatch must be used within a GameResultHistoryProvider"
        )
    }
    return context
}

export default GameResultHistoryProvider
export { useGameResultHistoryState, useGameResultHistoryDispatch }

