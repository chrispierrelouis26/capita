import React, { Component } from "react";
import "./Home.css";
import image from "../images/home-alien.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-1">
          <div className="box-1">
            <h6>Product</h6>
          </div>
          <div className="box-2">
            <h6>The Mothership</h6>
          </div>
          <div className="box-3">
            <h6>People</h6>
          </div>
        </div>
        <div className="container-2">
          <div className="box-4">
            <img className="pinkman" src={image} />
          </div>
          <div className="box-5">
            <div className="typewriter">
              <h1>
                INTERDIMENSIONAL EXPLORERS CLUB JOURNEY BEYOND DESTINATION
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
