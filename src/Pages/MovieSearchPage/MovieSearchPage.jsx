import React, { useEffect, useState, useCallback } from "react";
import { Input } from '@material-ui/core';
import { apiKey } from "../../consts";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import { fetchData } from '../../utils';
import Loading from "../../components/Loading/Loading";
import Movies from '../../components/Movies/Movies';

const MoviePage = () => {
    const [requestedMovie, setRequestedMovie] = useState([])
    const [name,setName] = useState('')
    const [pages,setPages] = useState(0)
    const [request, setRequest] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)


    const url = `search/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&include_adult=false&query=${name}`;

    const fetchMovies = useCallback(() => {
        if (name === "") return;


        setRequest(true);

        fetchData(url)
            .then(data => {
                setRequestedMovie(data.results)
                setPages(data.total_pages)
                setRequest(false)
            });
    }, [name, url]);

     useEffect( ()=> {
         fetchMovies();
    }, [fetchMovies])

    const handlePage = () => {
        if (currentPage === pages) return
        setCurrentPage(currentPage + 1)
    }

    const handleBackPage = () => {
        if (currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }

    const handleFromSubmit = (e) => {
        e.preventDefault()
        fetchMovies();
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const hasMovies = requestedMovie.length > 0;

    return (
        <div>
            <p>Find your movie</p>
            <form onSubmit={handleFromSubmit}>
                <Input placeholder='Search...' onChange={handleInputChange} value={name} />
            </form>
            { request && <Loading /> }
            { !request && <Movies movies={requestedMovie} /> }
            {
                hasMovies && (
                    <>
                        <PaginationButtons handlePage={handlePage} handleBackPage={handleBackPage}/>
                        <p>Total pages: {pages}</p>
                        <p>Current page: {currentPage} </p>
                    </>
                )
            }
        </div>
    )
}


export default MoviePage