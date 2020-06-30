import React from "react";
import { Link } from "react-router-dom";

const MoviesItem = (
    {
        movie
    }
) => {
    return (
        <Link to={`movies/${movie.id}`}>
            <li >
                <img src={'https://image.tmdb.org/t/p/w300' + movie.poster_path  }/>
                <span>{movie.title ? movie.title : movie.name}</span>
            </li>
        </Link>
    );
};

export default MoviesItem;