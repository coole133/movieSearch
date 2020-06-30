import React from "react";
import { Button as MaterialButton } from "@material-ui/core";

function Button (
    {
        variant,
        color,
        children,
    }

) {
    return (
        <MaterialButton
            variant={variant}
            color={color}
        >
            {children}
        </MaterialButton>
    )
}


export default Button;