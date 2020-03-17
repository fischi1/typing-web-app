import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    useTheme
} from "@material-ui/core"
import React, { FC, FormEvent, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useSetTitleOnMount } from "../components/context/TitleProvider"
import {
    useUserInfoDispatch,
    useUserInfoState
} from "../components/context/UserInfoProvider"
import { appbarHeight } from "../components/general/AppContainer"
import HubButton from "../components/interface/HubButton"
import { highlightColors } from "../highlightColors"
import useLoadExampleData from "../hooks/useLoadExampleData"

type Props = {}

const maxUserNameLength = 12

const UserIntroduction: FC<Props> = props => {
    useSetTitleOnMount("")

    const userInfoState = useUserInfoState()
    const userInfoDispatch = useUserInfoDispatch()
    const theme = useTheme()
    const history = useHistory()

    const loadExampleData = useLoadExampleData()

    const [name, setName] = useState("")

    useEffect(() => {
        if (userInfoState.username !== "") history.push("/")
    }, [history, userInfoState.username])

    const isNameValid = () => {
        return name.trim() !== ""
    }

    const onChange = (val: string) => {
        if (val.trim().length > maxUserNameLength) return

        setName(val)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!isNameValid()) return

        userInfoDispatch({ type: "setUserName", username: name.trim() })
    }

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: `calc(100vh - ${appbarHeight})` }}
        >
            <Container maxWidth="sm" style={{ textAlign: "center" }}>
                <Typography
                    variant="h4"
                    style={{
                        marginBottom: theme.spacing(3),
                        color: highlightColors.green
                    }}
                >
                    Hello!
                </Typography>
                <Typography variant="h5">What's your name?</Typography>
                <form onSubmit={onSubmit}>
                    <div style={{ display: "flex", height: "66px" }}>
                        <div style={{ flex: "1 0 auto" }}>
                            <TextField
                                fullWidth
                                id="name"
                                label="Your name"
                                InputLabelProps={{ focused: true }}
                                value={name}
                                onChange={fieldProps =>
                                    onChange(fieldProps.target.value)
                                }
                            />
                        </div>
                        {isNameValid() && (
                            <div style={{ flex: "0 0 auto" }}>
                                <HubButton type="submit">GO!</HubButton>
                            </div>
                        )}
                    </div>
                </form>

                <Button
                    onClick={loadExampleData}
                    style={{
                        textTransform: "none",
                        marginTop: theme.spacing(15)
                    }}
                >
                    <span style={{ fontSize: "1.5rem" }}>
                        Skip and use example data
                    </span>
                </Button>
            </Container>
        </Grid>
    )
}

export default UserIntroduction
