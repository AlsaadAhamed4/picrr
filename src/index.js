import React from 'react';
import { render } from 'react-dom';
import { Router } from "@reach/router";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Home from './Home';
import { PicrContextProvider } from "./Picr-Context/PicrContextProvider";
import Favourites from './Favourites';
import Authentication from './Authentication';


const Application = () => {
  return (
    <PicrContextProvider>
      <Authentication />
      <Router>
        <Home path="/" />
        <Favourites path="/fav" />
      </Router>
    </PicrContextProvider>
  );
};

render(<Application />, document.getElementById('root'));

