import React from "react";
import MoviesItem from './MoviesItem';
import classes from "./movies.module.scss"

const Movies = (
    {
        movies
    }
) => {
    return (
        <div className={classes.movies}>
            {
                movies.map((movie) => {
                    return (
                        <MoviesItem
                            key={movie.id}
                            id={movie.id}
                            image={movie.poster_path}
                            title={movie.title}
                        />
                    );
                })
            }
        </div>
    );
};

export default Movies;