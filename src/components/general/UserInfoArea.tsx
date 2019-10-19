import React, { FC } from "react";
import AccountInformation from "../interface/AccountInformation";
import { useUserInfoState } from "../context/UserInfoProvider";

const UserInfoArea: FC<{}> = () => {

    const userInfo = useUserInfoState();

    return (
        <AccountInformation 
            curXP={userInfo.xp}
            gems={userInfo.gems}
            lvl={125}
            nextLvlXP={8000}
            username={userInfo.username}
        />
    );
};

export default UserInfoArea;