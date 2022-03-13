import React from 'react';

import logo from './logo.svg';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import {Link} from "react-router-dom";
import PopupExample from './geo_folder/gdp_world';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
           <Link to={"gdp"}>
             check out gdp in the world!
           </Link>
           
        
        
      </header>
    </div>
  );
}

export default App;
