import "regenerator-runtime" /* for async await transpile */
import "../styles/main.css"

import "./component/header-navbar"
import "./component/header-hero"

import main from "./view/main.js"

document.addEventListener("DOMContentLoaded", main);