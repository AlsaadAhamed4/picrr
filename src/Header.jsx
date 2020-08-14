import React from "react";
import { Link } from "@reach/router";
import Login from "./login";

const Header = () => {
    return (
        <>
            <div className="header">
                <header className="header--headerFlex">
                    <div>
                        <h1>Beens Love Beers</h1>
                    </div>
                    <div>
                        <Link to="/" className="header--headerNav-style">
                            <span >Home</span>
                        </Link>
                        <Link to="/fav" className="header--headerNav-style">
                            <span >Favourite</span>
                        </Link>
                        <Login />
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;