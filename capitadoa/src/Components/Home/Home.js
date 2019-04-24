import React, { Component } from "react";
import "./Home.css";
import Zoom from 'react-reveal/Zoom';
import image from "../images/home-alien.png";
import {BrowserRouter, Route , Link} from 'react-router-dom'
import logoTwo from '../images/capitalogo-2.jpg'
import Mens from '../MensPage'


class Home extends Component {
  render() {
    return (
      <div>
 
   <header>
     <div className = "container">
     <nav>
       <ul>
         <li><a href = "#">Home</a></li>
         <li><a href = "#">The MotherShip</a></li>
         <li><a href = "#">People</a></li>
       </ul>
     </nav>
     </div>
   </header>
   <div>
     <Zoom>
   <img className="pinkman" src={image} />
   </Zoom>
   </div>
   <div className ='container'>
   <div className = 'typewriter'>
   
   <p>EVERYTHING IS POSSIBLE</p>
   
   </div>
  
   <div className ='wrap'>
   <Link to={'/men'} className="button">Possibilites</Link>
     </div>
     
        
   </div>
      </div>
    );
  }
}

export default Home;
