import React  from 'react';
import HomePage from "./Pages/HomePage/HomePage";
import {Switch  , Route,} from "react-router-dom"
import NavigationButtons from "./components/NavigationButtons/NavigationButtons";
import MovieSearchPage from "./Pages/MovieSearchPage/MovieSearchPage";
import FavouritesPage from "./Pages/FavouritesPage/FavouritesPage";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage"
import Favourite from "./components/FavouritesMovies/FavouriteMenuButton";


function  App() {
    return (
        <div>
            <nav>
                <NavigationButtons />
                <Favourite />
            </nav>
            <Switch />
              <Route exact  path="/" >
                  <HomePage />
              </Route>
            <Route  path="/movies/:movieId">
                <MovieDetailsPage />
            </Route>
            <Route exact path="/movies">
                <MovieSearchPage />
            </Route>
            <Route exact path="/favourites">
                <FavouritesPage />
            </Route>
            <Switch />
        </div>
    );

}

export default App;
