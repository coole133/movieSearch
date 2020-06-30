import React from "react";
import { Button } from "@material-ui/core";

function Pagination() {
    return (
        <>
           <Button onClick={handleBackPage}
                   variant="contained"
                   color="secondary">
                   Previous
           </Button>
            <Button onClick={handleBackPage}
                    variant="contained"
                    color="secondary">
                    Next
            </Button>
        </>
    )
}

export default Pagination