import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import { addMovieItem } from "../../store/favourite/actions"
import classes from "./movies.module.scss"

const MoviesItem = (
    {
        id,
        title,
        image
    }
) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.currentUser);

    const handleAddItem = () => {
        dispatch(addMovieItem({
            id, title, image,
        }));
    }

    return (
        <div className={classes.movieItem}>
            <Link className={classes.link} to={`movies/${id}`}>
                   <img alt={title} src={'https://image.tmdb.org/t/p/w300' + image }/>
                   <p>{ title }</p>
            </Link>
            {
                user
                    ?
                    <div className="Add">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddItem}>
                            Add
                        </Button>
                    </div>
                    : null
            }
        </div>
    );
};

export default MoviesItem;