import React from "react";
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import "./Favourite.css"
import { connect } from "react-redux"


const Favourite = (
    {
        movieItems
    }
) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="FavMenu">
            <Button aria-controls="simple-menu" style={{fontSize: 18}} aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    movieItems.map((movieItem) => {
                        return (
                            <MenuItem key={movieItem.id}>{movieItem.name}</MenuItem>
                        )
                    })
                }
            </Menu>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movieItems: state.movie.movieItems
    }
}


export default connect(mapStateToProps)(Favourite)