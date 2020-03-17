import React, { ComponentProps, FC } from "react"
import { Redirect, Route } from "react-router-dom"
import { useUserInfoState } from "../context/UserInfoProvider"

type Props = ComponentProps<typeof Route>

const UsernameGivenRoute: FC<Props> = ({ children, ...restProps }) => {
    const userInfoState = useUserInfoState()

    if (userInfoState.username === "") return <Redirect to="/intro" />

    return <Route {...restProps}>{children}</Route>
}

export default UsernameGivenRoute
