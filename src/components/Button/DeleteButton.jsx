import React from "react";
import { useDispatch } from "react-redux";
import classes from "../NavigationButtons/navigationButtons.module.scss"
import {removeMovieItem} from "../../store/favourite/actions";

const DeleteButton = ({ item }) => {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeMovieItem(item))
    }

    return (
        <button
            className={classes.button}
            onClick={handleRemove}>
            delete
        </button>
    )
}

export default DeleteButton