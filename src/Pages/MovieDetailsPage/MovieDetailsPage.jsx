import React, { useEffect, useState } from "react";
import { apiKey } from "../../consts";
import { useParams } from "react-router-dom"
import "./MovieDetailsPageStyles.css"
import { fetchData } from '../../utils';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import DetailsButtons from "../../components/DetailsButtons/DetailsButtons"
import { Button } from "@material-ui/core";
import { connect } from "react-redux"
import { addMovieItem } from "../../store/favourite/actions";

function MovieDetailsPage(
    {
        addMovieItem,
        user
    }
) {
    const { movieId } = useParams()
    const [movie,setMovie] = useState({})
    const url = `movie/${movieId}?api_key=${apiKey}&language=en-US`

    const [reviews, setReviews] = useState(false)
    const [cast, setCast] = useState(false)

    useEffect(()=> {
        fetchData(url)
            .then(data => setMovie(data))
    }, [url])

    const handleAddItem = () => {
        const newMovie = {
            title: movie.title,
            image: movie.poster_path,
            id: movie.id
        }
        addMovieItem(newMovie)
    }


    return (
        <div>
            <h1>{movie.title}</h1>
            <MoviePoster imageUrl={movie.poster_path} />
            {
                user
                    ?  <Button
                        style={{marginLeft: 188}}
                        variant="contained"
                        color="primary"
                        onClick={handleAddItem}
                    >
                        Add to favourites
                    </Button>
                    : null
            }
            <p> Popularity : {movie.popularity}</p>
            <p> Release date : {movie.release_date}</p>
            <p className="overview"> Overview : {movie.overview}</p>
            <p> Status : {movie.status}</p>
            <p> Vote : {movie.vote_average}</p>
            <DetailsButtons reviews={reviews} cast={cast} setCast={setCast} setReviews={setReviews} />
            {
                reviews && <MovieReviews/>
            }
            {
                cast && <MovieCast />
            }

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovieItem: (item) => dispatch(addMovieItem(item))
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage)