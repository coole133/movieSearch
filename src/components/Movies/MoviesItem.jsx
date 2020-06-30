import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux"
import { addMovieItem } from "../../store/favourite/actions"
import "./MovieItem.css"



const MoviesItem = (
    {
        id,
        title,
        image,
        addMovieItem,
        user
    }
) => {

    const handleAddItem = () => {
        addMovieItem({
            id, title, image,
        })
    }

    return (
        <div>
            <Link to={`movies/${id}`}>
                <li >
                   <img src={'https://image.tmdb.org/t/p/w300' + image }/>
                   <p>{ title }</p>
                </li>
            </Link>
            {
                user
                    ?
                    <div className="Add">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddItem}>
                            Add
                        </Button>
                    </div>
                    : null
            }
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMovieItem: (item) => dispatch(addMovieItem(item))
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesItem);