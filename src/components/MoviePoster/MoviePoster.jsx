import React from "react";

const MoviePoster = (
    {
        imageUrl
    }
) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w300/${imageUrl}`} />
    );
};

export default MoviePoster;