import React, { FC, ComponentProps } from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserInfoState } from "../context/UserInfoProvider";

type Props = ComponentProps<typeof Route>;

const UsernameGivenRoute: FC<Props> = props => {

    const userInfoState = useUserInfoState();

    const { children, ...restProps } = props;

    if(userInfoState.username === "")
        return <Redirect to="/intro" />

    return (
        <Route {...restProps}>
            {children}
        </Route>
    )
}

export default UsernameGivenRoute;