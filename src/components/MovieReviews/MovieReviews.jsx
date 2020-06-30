import React, {useEffect, useState} from "react";
import { apiKey } from "../../consts";
import {useParams} from "react-router-dom";

function MovieReviews() {
    const { movieId } = useParams()
    const [review,setReview] = useState([])
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`

    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data.results))
    }, [url])

    console.log(review)

    return(
        <div>
            {
                review.length === 0
                    ? <p>No reviews</p>
                    : review.map((item => {
                        return (
                            <div key={item.id}>
                                <p>{item.author}</p>
                                <p>{item.content}</p>
                            </div>
                        )
                    }))
            }
        </div>
    )
}

export default MovieReviews