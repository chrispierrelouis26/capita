import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Mens from '../MensPage'
import Home from '../Components/Home/Home'


export default ()=> (
    <BrowserRouter>
    <Route path ='/men' component = {Mens} />
    <Route path ='/home' component ={Home}/>

    </BrowserRouter>
)