import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./NavigationButtonsStyles.css"

function NavigationButtons() {
    return (
        <div className="NavigationButtons">
            <Button
                variant="contained"
                color="primary"
            >
                <Link to="/">Home</Link>
            </Button>
            <Button
                variant="contained"
                color="primary"
            >
                <Link to="/movies">Movies</Link>
            </Button>
        </div>
    )
}


export default NavigationButtons;