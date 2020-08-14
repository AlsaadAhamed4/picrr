import React, { useContext } from "react";
import { PicrContext } from "./Picr-Context/PicrContextProvider";
import FavouritesListItems from "./FavouritesListItems";


const Favourites = () => {

    const { state } = useContext(PicrContext);

    return (
        <>
            {
                state.favList.length > 0 ?

                    state.favList.map((fav) => <FavouritesListItems {...fav} key={fav.name} />)

                    :
                    <h1>☹ No Favourites Yet , Please Add by clicking star.</h1>

            }
        </>
    );
}

export default Favourites;