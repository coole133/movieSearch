import React, {useEffect, useState} from "react";
import { apiKey } from "../../consts";
import { useParams } from "react-router-dom";


function MovieCast() {
    const { movieId } = useParams()
    const [cast,setCast] = useState([])
    const url =`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`

    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(data => setCast(data.cast))
    }, [url])

    console.log(cast)

    return(
        <div>
            {cast.length === 0
                ? <p>No information</p>
                : cast.map(item => {
                    return (
                        <div key={item.cast_id}>
                            <p>{item.character}</p> <span>---</span>  <p>{item.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MovieCast