import React from "react";
import { Button } from "@material-ui/core";

function PaginationButtons(
    {
        handlePage,
        handleBackPage
    }
) {
    return (
        <div className="PaginationButtons">
            <Button
                onClick={handleBackPage}
                variant="contained"
                color="primary"
            >
                Previous
            </Button>
            <Button
                onClick={handlePage}
                variant="contained"
                color="primary"
            >
                Next
            </Button>
        </div>
    )
}


export default PaginationButtons;