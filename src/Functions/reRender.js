import ReactDOM from "react-dom";
import App from "../App";
import React from 'react';

export const reRender = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App timer={data} />
        </React.StrictMode>,
        document.getElementById('root')
    );}