import React, { useReducer, createContext } from "react"
import { firebase, googleAuthProvider, database } from "../firebase"

const initialState = {
    allBeers: [],
    favList: [],
    isUser: ""
};

const reducer = (state, action) => {
    if (action.type === "ALL_HOME_BEERS") {
        return { ...state, allBeers: action.payload.beers }
    }
    if (action.type === "ON_ADDING_LIST") {
        const list = state.allBeers.find((beer) => action.payload.name === beer.name);
        if (state.favList.some((item) => item.name === list.name)) {
            state.favList = state.favList.filter((fav) => {
                if (fav.name === list.name) {
                    database.ref(`Favourites/${state.isUser}/beers/${fav.name}`)
                        .remove()
                }
                return fav.name !== list.name;
            });
        }
        else {
            state.favList.push(list);
            const len = state.favList.length - 1;
            database.ref("Favourites")
                .child(`${state.isUser}/beers/${state.favList[len].name}`)
                .update({
                    ...state.favList[len]
                });
        }
        return { ...state }
    }
    if (action.type === "ON_AUTH_STATE_CHANGE") {
        return { ...state, isUser: action.payload.userID, favList: action.payload.allFavFromDB }
    }
    return state;
}

export const PicrContext = createContext();


export const PicrContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    window.state = state;

    const getBeers = async (searchParams = "") => {
        const subUrl = searchParams === "" ? "" : `?brewed_before=${searchParams}&abv_gt=6`;
        const beers = await fetch(`https://api.punkapi.com/v2/beers${subUrl}`)
            .then((response) => response.json())
            .catch(error => {
                console.log(error);
            })
        dispatch({
            type: "ALL_HOME_BEERS",
            payload: {
                beers
            }
        })
    }

    const onAddingFavList = async (name) => {
        await dispatch({
            type: "ON_ADDING_LIST",
            payload: {
                name
            }
        })

    }

    const logIn = () => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    }

    const logOut = () => {
        firebase.auth().signOut();
    }

    const onAuthStateChangedAction = async (userID) => {
        let allFavFromDB = [];
        if (userID) {
            await database
                .ref(`Favourites/${state.isUser}`)
                .once("value", (snapShot) => {
                    //userID
                    snapShot.forEach((child1) => {
                        //beers
                        child1.forEach((item) => {
                            allFavFromDB.push(item.val());
                        });
                    });
                })
        }
        dispatch({
            type: "ON_AUTH_STATE_CHANGE",
            payload: {
                userID,
                allFavFromDB
            }
        });
    }

    const value = {
        state,
        getBeers,
        onAddingFavList,
        logIn,
        logOut,
        onAuthStateChangedAction
    };

    return <PicrContext.Provider value={value}>{children}</PicrContext.Provider>
}