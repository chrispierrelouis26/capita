import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Mens from '../Components/MensPage'

export default ()=> (
    <BrowserRouter>
    <Route path ='/men' component = {Mens} />>
    </BrowserRouter>
)