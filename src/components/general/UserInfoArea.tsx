import React, { FC, useMemo } from "react";
import AccountInformation from "../interface/AccountInformation";
import { useUserInfoState } from "../context/UserInfoProvider";

const initialXP = 150;

const UserInfoArea: FC<{}> = () => {

    const userInfo = useUserInfoState();

    const lvlInfo = useMemo(() => {
        var level = 0;
        
        var xp = userInfo.xp;
        console.log(xp);

        while(xp - (initialXP * (level + 1)) >= 0) {
            xp -= initialXP * (level + 1);
            level++;
        }

        const xpForNextLevel = initialXP * (level + 1);
    
        return {xp: xp, level: level, xpForNextLevel: xpForNextLevel};
    }, [userInfo.xp]);

    console.table(lvlInfo);

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