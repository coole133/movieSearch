import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import "./Favourite.css"
import FavouriteItem from "./FavouriteItem";
import { connect } from "react-redux"


const Favourites = (
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
        <div className="FavMenu">
            {
                user
                    ? <>
                        <Button
                           onClick={handleMenu}
                           aria-controls="simple-menu"
                           style={{fontSize: 18}}
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
                opened ?  <div className="MovieList">
                    {
                        movieItems.map((movieItem) => {
                            return (
                                <FavouriteItem
                                    handleMenu={handleMenu}
                                    title={movieItem.title}
                                    key={movieItem.id}
                                    id={movieItem.id}
                                    image={movieItem.image}
                                    item={movieItem}
                                />
                            )
                        })
                    }
                </div>
                    : null
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


export default connect(mapStateToProps)(Favourites)