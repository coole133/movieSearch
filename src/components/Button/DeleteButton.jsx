import React from "react";
import { Button } from "@material-ui/core";
import { removeMovieItem } from "../../store/favourite/actions";
import {connect} from "react-redux";

const DeleteButton = ({
                          item,
                          removeMovieItem
}) => {

    const handleRemoveMovieItem = () => {
        removeMovieItem(item)
    }

    return (
        <Button
            color="primary"
            onClick={handleRemoveMovieItem}
            variant="contained">
            delete
        </Button>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeMovieItem: (item) => dispatch(removeMovieItem(item))
    }
}


export  default connect(null, mapDispatchToProps)(DeleteButton)