import { useReducer, useRef } from "react";
import useKeyEvents from "../hooks/useKeyEvents";

type KeyStateType = Record<number, boolean>;

type ActionType = {
    type: "keydown" | "keyup",
    keyCode: number
}

var initialState : KeyStateType = {};
for(let i = 0; i < 255; i++) {
    initialState[i] = false;
}

function reducer(state : KeyStateType, action : ActionType) : KeyStateType {
    var ret = {...state};
    if(action.type === "keydown")
        ret[action.keyCode] = true;
    else if(action.type === "keyup")
        ret[action.keyCode] = false;
    return ret;
}

type KeyStateParams = {
    onKeyDown?(key : string): void,
    onKeyUp?(key : string): void
}

function useGermanKeysState(params : KeyStateParams) : KeyStateType {
    const [state, dispatch] = useReducer(reducer, initialState);

    const keyUpRef = useRef<any>();
    const keyDownRef = useRef<any>();

    keyDownRef.current = (e : KeyboardEvent) => {
        if(!!params.onKeyDown)
            params.onKeyDown(e.key);
        dispatch({type: "keydown", keyCode: e.keyCode});
    };
    keyUpRef.current = (e : KeyboardEvent) => {    
        if(!!params.onKeyUp)
            params.onKeyUp(e.key);
        dispatch({type: "keyup", keyCode: e.keyCode});
    };

    useKeyEvents(keyUpRef.current, keyDownRef.current);

    return state;
}

export default useGermanKeysState; 