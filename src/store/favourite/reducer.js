import { ADD_MOVIE_ITEM, REMOVE_MOVIE_ITEM  } from "./consts"

const initialState = {
    movieItems: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE_ITEM:
            let updatedItems = [];
            const isExist = state.movieItems.find((movieItem) => {
                return movieItem.id === action.payload.id
        })

            if (isExist) {
                updatedItems = state.movieItems.map((movieItem) => {
                    return movieItem.id === action.payload.id
                    ? {...movieItem, quantity: movieItem.quantity + 1}
                    : movieItem
                })
            } else {
                updatedItems = [...state.movieItems , {...action.payload, quantity: 1}]
            }

            return {
                ...state,
                movieItems: updatedItems

            }
        case REMOVE_MOVIE_ITEM: {
            const updatedItems = state.movieItems.filter((movieItem) => movieItem.id !== action.payload.id)
            return {
                ...state,
                movieItems: updatedItems
            }
        }
        default:
            return state;
    }
}

export default movieReducer;