import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';

const useStyles = makeStyles({    
    list: {
        width: 300
    }
});

type Props = {
    open: boolean,
    onClose: () => void
}

const MenuDrawer : FC<Props> = props => {

    const classes = useStyles();

    const routes = [
        {
            text: "Hub",
            url: "/"
        },
        {
            text: "Lessons",
            url: "/lessons"
        },
        {
            text: "Stats",
            url: "/stats"
        },
        {
            text: "About",
            url: "/about"
        }
    ];

    if(process.env.NODE_ENV === "development") {
        routes.push({
            text: "DEV ONLY Debug",
            url: "/debug"
        });
        routes.push({
            text: "DEV ONLY Typing",
            url: "/typing"
        });
    }

    const location = useLocation();

    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <List className={classes.list}>
                {routes.map(route => (
                    <ListItem
                        button
                        {...{component: RouterLink, to: route.url} as any}
                        onClick={props.onClose}
                        key={route.url}
                        selected={route.url === location.pathname}
                    >
                        <ListItemText>
                            {route.text}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default MenuDrawer;