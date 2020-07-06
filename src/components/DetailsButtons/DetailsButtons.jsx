import React from "react";
import { Button } from "@material-ui/core";



const  DetailsButtons = (
    {
        setReviews,
        setCast,
        reviews,
        cast
    }
) => {

    const handleReviews = () => {
        setReviews(!reviews)
    }

    const handleCast = () => {
        setCast(!cast)
    }

    return (
        <div>
            <Button
                onClick={handleReviews}
                variant="contained"
                color="secondary"
            >
                Reviews
            </Button>
            <Button
                onClick={handleCast}
                variant="contained"
                color="secondary"
            >
                Cast
            </Button>
        </div>
    )
}


export default DetailsButtons;