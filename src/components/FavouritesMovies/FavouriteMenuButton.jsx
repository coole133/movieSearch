import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { FavouriteListItems } from "./FavouriteListItems";
import { connect } from "react-redux"
import classes from "./favouriteMenuButton.module.scss"


const FavouriteMenuButton = (
    {
        movieItems,
        user
    }
) => {

    const [opened, setOpened] = useState(false)

    const handleMenu = () => {
        setOpened(!opened)
    }

    return (
        <div className={classes.favouriteButton}>
            {
                user
                    ? <>
                        <Button
                           onClick={handleMenu}
                           aria-controls="simple-menu"
                           style={{fontSize: 19}}
                           aria-haspopup="true" >
                           Open Menu
                        </Button>
                         {
                           opened
                                 ?   <div className="arrow">&#8681;</div>
                                 :    <div className="arrow">&#8679;</div>
                         }
                      </>
                    : null
            }
            {
                opened && (
                    <FavouriteListItems
                        handleMenu={handleMenu}
                        movieItems={movieItems}
                    />
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movieItems: state.movie.movieItems,
        user: state.user.currentUser
    }
}


export default connect(mapStateToProps)(FavouriteMenuButton)