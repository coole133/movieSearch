import React from "react";
import FavouriteItem from "./FavouriteItem";


const FavouriteListItems = (
    {
        handleMenu,
        movieItems
    }
) => {
    return (
        <div>
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
    );
};

export { FavouriteListItems };