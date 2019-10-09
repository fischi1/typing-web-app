import React, { FC } from "react";

type Props = {
}

const Page : FC<Props> = props => {
    return (
        <div>
            {props.children}    
        </div>
    )
}

export default Page;