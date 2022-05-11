import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "./routes/Routes";

function App() {
    return (
        <div className="App">
            <HashRouter>
                {/*<Main/> -> Header, Routes(const str)*/}
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
