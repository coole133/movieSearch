import React from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
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
        <div className="FavMovie" >
                <p>{title}</p>
            <div className="align">
                <img onClick={handlePush} className="smallImage" src={'https://image.tmdb.org/t/p/w300' + image }/>
                <DeleteButton item={item} />
            </div>
        </div>
    )
}


export  default connect(null, null)(FavouriteItem)