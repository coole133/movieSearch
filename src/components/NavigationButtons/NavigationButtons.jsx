import React from "react";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./NavigationButtonsStyles.css"

function NavigationButtons({user}) {
    return (
        <div className="NavigationButtons">
            <Button
                variant="contained"
                color="primary"
            >
                <Link to="/">Home</Link>
            </Button>
            <Button
                variant="contained"
                color="primary"
            >
                <Link to="/movies">Movies</Link>
            </Button>
            {
                user
                    ?   <Button variant="contained"  color="primary">
                           <Link to="/favourites">Check your favourites</Link>
                        </Button>
                    : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}


export default connect(mapStateToProps, null)(NavigationButtons);