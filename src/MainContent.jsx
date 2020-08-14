import React, { useContext, useEffect } from "react";
import { PicrContext } from "./Picr-Context/PicrContextProvider";
import BeerListItems from "./BeerListItems";
import SearchInput from "./SearchInput";

const MainContent = () => {

    const { state, getBeers } = useContext(PicrContext)

    useEffect(() => {
        getBeers();
    }, [])

    return (
        <>
            <div className="container">
                <SearchInput />
                <div className="row">
                    {
                        state.allBeers.length > 0 ?
                            (state.allBeers.map((beer) => <BeerListItems {...beer} key={beer.name} />))
                            :
                            (<h1>☹ Sorry No results found on Search , Please enter different month-year eg:1-2008</h1>)
                    }
                </div>
            </div >
        </>
    );
}

export default MainContent;