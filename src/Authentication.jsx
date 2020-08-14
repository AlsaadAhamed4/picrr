import React, { useContext, useEffect } from "react";
import { firebase } from "./firebase";
import { PicrContext } from "./Picr-Context/PicrContextProvider";

export const Authentication = () => {
    const { state, onAuthStateChangedAction } = useContext(PicrContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                onAuthStateChangedAction(user.uid)
            }
            else {
                onAuthStateChangedAction(user)
            }
        })
    }, [state.isUser])

    return (
        <>
        </>
    )
};

export default Authentication;