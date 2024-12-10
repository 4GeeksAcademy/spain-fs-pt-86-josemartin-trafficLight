//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/TrafficLight.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(
    <StrictMode>
        <TrafficLight/>
    </StrictMode>
);

