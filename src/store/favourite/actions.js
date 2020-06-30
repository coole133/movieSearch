import { ADD_MOVIE_ITEM, REMOVE_MOVIE_ITEM  } from "./consts"


export const addMovieItem = (item) => {
    return {
        type: ADD_MOVIE_ITEM,
        payload: item
    }
}

export const removeMovieItem = (item) => {
    return {
        type: REMOVE_MOVIE_ITEM,
        payload: item
    }
}