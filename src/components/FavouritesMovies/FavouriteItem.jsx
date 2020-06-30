import React from "react";
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { removeMovieItem } from "../../store/favourite/actions";


const FavouriteItem = (
    {
        title,
        image,
        id,
        item,
        handleMenu,
        removeMovieItem

    }
) => {

    const history = useHistory()

    const handlePush = () => {
        history.push(`/movies/${id}`)
        handleMenu()
    }

    const handleRemoveMovieItem = () => {
        removeMovieItem(item)
    }

    return (
        <div className="FavMovie" >
                <p>{title}</p>
            <div className="align">
                <img onClick={handlePush} className="smallImage" src={'https://image.tmdb.org/t/p/w300' + image }/>
                <Button
                    color="primary"
                    onClick={handleRemoveMovieItem}
                    variant="contained">
                    delete
                </Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeMovieItem: (item) => dispatch(removeMovieItem(item))
    }
}

export  default connect(null, mapDispatchToProps)(FavouriteItem)