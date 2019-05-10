import { useReducer, useRef } from "react";
import useKeyEvents from "../hooks/useKeyEvents";

type KeyStateType = {
    [key: number] : boolean
}

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

function useGermanKeysState() : KeyStateType {
    const [state, dispatch] = useReducer(reducer, initialState);

    const keyUpRef = useRef<any>();
    const keyDownRef = useRef<any>();

    keyDownRef.current = (e : KeyboardEvent) => {
        dispatch({type: "keydown", keyCode: e.keyCode});
    };
    keyUpRef.current = (e : KeyboardEvent) => {    
        dispatch({type: "keyup", keyCode: e.keyCode});
    };

    useKeyEvents(keyUpRef.current, keyDownRef.current);

    return state;
}

export default useGermanKeysState; 