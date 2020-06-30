import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import favouriteReducer from './favourite/reducer';
import userReducer from "./user/reducer"

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user', 'movie']
}

const rootReducer =  combineReducers({
    movie: favouriteReducer,
    user: userReducer
});

export default persistReducer(persistConfig,rootReducer)