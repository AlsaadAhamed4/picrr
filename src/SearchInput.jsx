import React, { useContext, useState } from "react";
import { PicrContext } from "./Picr-Context/PicrContextProvider";

const SearchInput = () => {

    const { getBeers } = useContext(PicrContext);

    const [searchVal, setSearchVal] = useState("");

    const OnSearch = () => {
        getBeers(searchVal);
    }

    return (
        <div className="row mt-5 mb-4">
            <div className="col-sm-10 offset-md-4 col-md-4 pr-0">
                <input id="search" className="form-control" type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder={"eg: month-year in numeric.."} />
            </div>
            <div className="col-md-2 p-0">
                <button className="btn btn-primary" onClick={OnSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchInput;