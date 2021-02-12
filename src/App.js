import React from 'react'
import './App.css';
import Display from "./Display/display";
import Buttons from "./Buttons/buttons";
import {startStop} from "./Functions/funtions";
import {reset} from "./Functions/funtions";
import {pause} from "./Functions/funtions";

function App(props) {
    return (
        <div className="App">
            <Display timer={props.timer}/>
            <Buttons startStop={startStop} reset={reset} pause={pause}/>
        </div>
    );
}


export default App;
