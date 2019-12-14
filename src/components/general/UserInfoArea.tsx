import React, { FC } from "react";
import useCalculateLvlInfo from "../../hooks/useCalculateLvlInfo";
import { useUserInfoState } from "../context/UserInfoProvider";
import AccountInformation from "../interface/AccountInformation";

const UserInfoArea: FC<{}> = () => {

    const userInfo = useUserInfoState();
    const lvlInfo = useCalculateLvlInfo();

    if(userInfo.username === "")
        return null;

    return (
        <AccountInformation 
            curXP={lvlInfo.xp}
            gems={userInfo.gems}
            lvl={lvlInfo.level}
            nextLvlXP={lvlInfo.xpForNextLevel}
            username={userInfo.username}
        />
    );
};

export default UserInfoArea;