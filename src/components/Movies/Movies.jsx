import React from "react";
import MoviesItem from './MoviesItem';

const Movies = (
    {
        movies
    }
) => {
    return (
        <ul>
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
        </ul>
    );
};

export default Movies;