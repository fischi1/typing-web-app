import React, { createContext, FC, useContext, useReducer } from "react"
import lessonsData from "../../data/lessonsDataImport"
import loadFromLocalStorage from "../../functions/loadFromLocalStorage"
import usePersistToLocalStorageOnChange from "../../hooks/usePersistToLocalStorageOnChange"
import { GameResultType } from "../../types/GameResultType"

type State = {
    username: string
    xp: number
    gems: number
}

type Action =
    | { type: "setUserName"; username: string }
    | { type: "addGems"; amount: number }
    | { type: "removeGems"; amount: number }
    | { type: "addXP"; amount: number }
    | { type: "resetProgression" }
    | { type: "lessonComplete"; payload: GameResultType }
    | { type: "setState"; payload: State }

type Dispatch = (action: Action) => void

const UserInfoStateContext = createContext<State | undefined>(undefined)
const UserInfoDispatchContext = createContext<Dispatch | undefined>(undefined)

const LOCAL_STORAGE_KEY = "userInfo"

const userInfoReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "addGems":
            return { ...state, gems: state.gems + action.amount }

        case "removeGems":
            if (state.gems - action.amount < 0) return state
            return { ...state, gems: state.gems - action.amount }

        case "addXP":
            if (action.amount < 0) return state
            return { ...state, xp: state.xp + action.amount }

        case "setUserName":
            return { ...state, username: action.username }

        case "resetProgression":
            return { ...initialState }

        case "lessonComplete":
            const lesson = lessonsData.data[action.payload.lessonUuid]

            if (!lesson) {
                console.error(
                    "lesson with uuid " +
                        action.payload.lessonUuid +
                        " doesn't exist"
                )
                return { ...initialState }
            }

            return {
                ...state,
                xp: state.xp + lesson.xpForSuccess,
                gems: state.gems + action.payload.gemsEarned
            }

        case "setState":
            return action.payload
    }
}

const initialState: State = {
    gems: 0,
    xp: 0,
    username: ""
}

const UserInfoProvider: FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(
        userInfoReducer,
        loadFromLocalStorage<State>(LOCAL_STORAGE_KEY, initialState)
    )

    usePersistToLocalStorageOnChange(LOCAL_STORAGE_KEY, state)

    return (
        <UserInfoStateContext.Provider value={state}>
            <UserInfoDispatchContext.Provider value={dispatch}>
                {children}
            </UserInfoDispatchContext.Provider>
        </UserInfoStateContext.Provider>
    )
}

const useUserInfoState = () => {
    const context = useContext(UserInfoStateContext)
    if (context === undefined) {
        throw new Error(
            "useUserInfoState must be used within a UserInfoProvider"
        )
    }
    return context
}

const useUserInfoDispatch = () => {
    const context = React.useContext(UserInfoDispatchContext)
    if (context === undefined) {
        throw new Error(
            "useUserInfoDispatch must be used within a UserInfoProvider"
        )
    }
    return context
}

export default UserInfoProvider
export { useUserInfoState, useUserInfoDispatch }
