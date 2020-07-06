import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

function Loading () {
        return(
            <Loader
                className="Spinner"
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000000} //3 secs

            />
        );
}

export default Loading