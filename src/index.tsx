import FontFaceObserver from "fontfaceobserver"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./assets/font/m5x7.scss"
import * as serviceWorker from "./serviceWorker"

new FontFaceObserver("m5x7", { weight: 400 }).load().then(() => {
    ReactDOM.render(<App />, document.getElementById("root"))
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
