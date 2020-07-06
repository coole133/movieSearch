import React from "react";
import { Link } from "react-router-dom";
import classes from "../NavigationButtons/navigationButtons.module.scss"

const ButtonItem = (
    {
        link,children
    }
) => {


    return (
        <button
            className={classes.button}
        >
            <Link to={link}>
                {children}
            </Link>
        </button>
    )
}


export  default ButtonItem

