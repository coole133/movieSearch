import React from "react";
import { connect } from "react-redux";
import DeleteButton from "../../components/Button/DeleteButton";
import classes from "./../../components/Movies/movies.module.scss"

const FavouritesPage = (
    {
        movieItems
    }
) => {
    return (
      <div className={classes.movies}>
          {
              movieItems.length !== 0
                  ? movieItems.map((movieItem) => {
                  return (
                      <div key={movieItem.id} className={classes.movieItem}>
                          <img alt={movieItem.title} src={'https://image.tmdb.org/t/p/w300' + movieItem.image }/>
                          <p>{movieItem.title}</p>
                          <DeleteButton item={movieItem} />
                      </div>
                  )
              })
                  : <p>No movies added</p>
          }
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movieItems: state.movie.movieItems,
    }
}


export default connect(mapStateToProps)(FavouritesPage)