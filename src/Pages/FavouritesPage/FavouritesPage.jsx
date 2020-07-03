import React, {useEffect, useState} from "react";
import "./FavouritesPageStyles.css"
import { connect } from "react-redux";
import DeleteButton from "../../components/Button/DeleteButton";

const FavouritesPage = (
    {
        movieItems
    }
) => {

    return (
      <div className="main">
          {
              movieItems.map((movieItem) => {
                  return (
                      <div className="favMovie" key={movieItem.id}>
                          <p>{movieItem.title}</p>
                          <img src={'https://image.tmdb.org/t/p/w300' + movieItem.image }/>
                          <DeleteButton item={movieItem} />
                      </div>
                  )
              })
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