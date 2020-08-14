import React, { useContext } from "react";
import { PicrContext } from "./Picr-Context/PicrContextProvider";

const Login = () => {
    const { logIn, state, logOut } = useContext(PicrContext);

    const toggleLogText = state.isUser === null ? "Log In" : "Log Out";

    const togglLogFunc = (e) => {
        e.target.name === "Log In" ? logIn() : logOut()
    }

    return (
        <div style={{ display: "inline" }}>
            {
                <button name={toggleLogText} onClick={togglLogFunc}>{toggleLogText}</button>
            }

        </div>
    );
}

export default Login;