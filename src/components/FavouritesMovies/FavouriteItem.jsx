import React from "react";
import { useHistory } from "react-router-dom"
import classes from "./favouriteItem.module.scss"
import DeleteButton from "../Button/DeleteButton";


const FavouriteItem = (
    {
        title,
        image,
        id,
        item,
        handleMenu,

    }
) => {

    const history = useHistory()

    const handlePush = () => {
        history.push(`/movies/${id}`)
        handleMenu()
    }

    return (
        <div className={classes.item}>
            <p className={classes.title}>{title}</p>
            <div className={classes.underItem}>
                <img
                    className={classes.image}
                    onClick={handlePush}
                    alt={title}
                    src={'https://image.tmdb.org/t/p/w300' + image }
                />
                <DeleteButton item={item} />
            </div>
        </div>
    )
}

export  default FavouriteItem