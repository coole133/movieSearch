import React  from 'react';
import HomePage from "./pages/HomePage/HomePage";
import {Switch  , Route,} from "react-router-dom"
import NavigationButtons from "./components/NavigationButtons/NavigationButtons";
import MovieSearchPage from "./pages/MovieSearchPage/MovieSearchPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
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
