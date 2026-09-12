'use strict'
import { carregarHome } from "./pages/home.js"

const logo = document.getElementById('logo')

logo.onclick = carregarHome

carregarHome()