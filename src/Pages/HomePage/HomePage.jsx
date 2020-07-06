import React, { useEffect, useState } from "react";
import { trendingUrl } from "../../consts";
import Movies from '../../components/Movies/Movies';


const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        fetch(trendingUrl)
            .then(res => res.json())
            .then(data => setTrendingMovies(data.results))
    }, [])

    return (
        <Movies
            movies={trendingMovies}
        />
    );
}

export default HomePage