import React from "react";
import { connect } from "react-redux";
import classes from "./navigationButtons.module.scss"
import ButtonItem from "../Button/ButtonItem"

function NavigationButtons({user}) {
    return (
        <div className={classes.navButtons}>
            <ButtonItem  link="/" children="home"/>
            <ButtonItem link="/movies" children="movies"/>
            <ButtonItem link="/favourites" children="check favourites"/>
            <ButtonItem link="/signIn" children="sign in"/>
            <ButtonItem link="/signIn" children="profile"/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}


export default connect(mapStateToProps, null)(NavigationButtons);