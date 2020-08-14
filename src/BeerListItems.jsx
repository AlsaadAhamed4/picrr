import React, { useContext } from "react";
import { PicrContext } from "./Picr-Context/PicrContextProvider";

const BeerListItems = ({ name, description, image_url }) => {

    const { onAddingFavList, state } = useContext(PicrContext);

    const onFavarite = () => {
        onAddingFavList(name)
    }

    return (
        <div className="menu-item-tile col-md-5 ml-5 mr-5">
            <div className="row">
                <div className="col-sm-5 p-0 pr-3">
                    <div className="menu-item-photo">
                        <div></div>
                        <img className="img-responsive" width="250" height="150" src={image_url} alt={name} />
                    </div>
                </div>
                <div className="menu-item-description col-sm-7 p-0">
                    <h3 className="menu-item-title">{name}</h3>
                    {
                        !!state.isUser ?
                            (<span className="fav" role="img" aria-label="fav" onClick={onFavarite}>⭐</span>)
                            :
                            null
                    }
                    <p className="menu-item-details">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default BeerListItems;