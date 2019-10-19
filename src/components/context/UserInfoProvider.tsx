import React, { createContext, FC, useContext, useReducer } from "react";
import loadFromLocalStorage from "../../functions/loadFromLocalStorage";
import usePersistToLocalStorageOnChange from "../../hooks/usePersistToLocalStorageOnChange";

type Action = 
    {type: "setUserName", username: string} |
    {type: "addGems", amount: number} |
    {type: "removeGems", amount: number} |
    {type: "addXP", amount: number} | 
    {type: "resetProgression"};

type Dispatch = (action: Action) => void
type State = {
    username: string,
    xp: number,
    gems: number
}

const UserInfoStateContext = createContext<State | undefined>(undefined)
const UserInfoDispatchContext = createContext<Dispatch | undefined>(undefined);

const LOCAL_STORAGE_KEY = "userInfo";

const userInfoReducer = (state: State, action: Action) : State => { 
    switch (action.type) {
        case "addGems": 
            return {...state, gems: state.gems + action.amount};
        case "removeGems":
            if(state.gems - action.amount < 0)
                return state;
            return {...state, gems: state.gems - action.amount};
        case "addXP":
            if(action.amount < 0)
                return state;
            return {...state, xp: state.xp + action.amount};
        case "setUserName":
            return {...state, username: action.username};
        case "resetProgression": 
            return {...initialState, username: state.username};
    }
}

const initialState: State = {
    gems: 0,
    xp: 0,
    username: ""
} 

const UserInfoProvider: FC<{}> = ({children}) => {
    const [state, dispatch] = useReducer(userInfoReducer, loadFromLocalStorage<State>(LOCAL_STORAGE_KEY, initialState));

    usePersistToLocalStorageOnChange(LOCAL_STORAGE_KEY, state);
  
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
        throw new Error('useUserInfoState must be used within a UserInfoProvider')
    }
    return context;
}

const useUserInfoDispatch = () => {
    const context = React.useContext(UserInfoDispatchContext)
    if (context === undefined) {
        throw new Error('useUserInfoDispatch must be used within a UserInfoProvider')
    }
    return context;
}

export default UserInfoProvider;
export { useUserInfoState, useUserInfoDispatch };

