import React from 'react';
import FontFaceObserver from "fontfaceobserver";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  "./assets/font/m5x7.scss";

new FontFaceObserver("m5x7", {weight: 400})
.load().then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
