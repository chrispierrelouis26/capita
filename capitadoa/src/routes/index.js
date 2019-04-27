import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Mens from '../Components/MensPage'
import Home from '../Components/Home/Home'
import Female from '../Components/FemalePage'



export default ()=> (
    <BrowserRouter>
    <Route path ='/men' component = {Mens} />
    <Route path ='/home' component ={Home}/>
    <Route path = '/female' component ={Female}/>
    
    


    </BrowserRouter>
)