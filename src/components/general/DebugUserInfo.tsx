import React, { FC, useState } from "react";
import { useUserInfoDispatch, useUserInfoState } from "../context/UserInfoProvider";
import { TextField, Button, Typography } from "@material-ui/core";

const DebugUserInfo: FC<{}> = () => {

    const userInfoState = useUserInfoState();

    const [username, setUsername] = useState(userInfoState.username);
    const [xp, setXP] = useState("0");
    const [gems, setGems] = useState("0");

    const dispatch = useUserInfoDispatch();

    const applyUsername = () => {
        dispatch({type: "setUserName", username: username});
    }

    const applyXP = () => {
        dispatch({type: "addXP", amount: +xp});
    }

    const resetProgression = () => {
        dispatch({type: "resetProgression"});
    }

    const addGems = () => {        
        dispatch({type: "addGems", amount: +gems});
    }

    const removeGems = () => {        
        dispatch({type: "removeGems", amount: +gems});
    }

    return <>
        <div>
            <Typography>Username</Typography>
            <TextField value={username} onChange={e => setUsername(e.target.value)} placeholder="empty" />
            <Button onClick={applyUsername}>Set Username</Button>
        </div>
        <div>
            <Typography>XP</Typography>
            <TextField value={xp} onChange={e => setXP(e.target.value)} placeholder="XP" type="number" />
            <Button onClick={applyXP}>Add XP</Button>
        </div>
        <div>
            <Typography>Gems</Typography>
            <TextField value={gems} onChange={e => setGems(e.target.value)} placeholder="gems" type="number" />
            <Button onClick={addGems}>Add Gems</Button>
            <Button onClick={removeGems}>Remove Gems</Button>
        </div>
        <div>
            <Typography>Reset Progression</Typography>
            <Button onClick={resetProgression}>Reset</Button>
        </div>
    </>;
};

export default DebugUserInfo;