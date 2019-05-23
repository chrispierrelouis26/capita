import React, { Component } from "react";
import "./Men.css";
import API from "../utils/API";

class Mens extends Component {
  state = {
    boards: [],
    sorted: [],
    powder: [],
    mountain: [],
    expensive: [],
    least: [],
    cart: [],
    park: [],
    visibility: false
  };

  toggle = () => {
    this.setState({
      visibility: !this.state.visibility
    })
  }

  toggleMountain = () => {
    this.setState({
      visibility: !this.state.visibility
    })
    console.log(this.state.mountain);
  }





  componentDidMount() {
    //first API call to all the boards
    API.getAllBoards()
      .then(res => {
        this.setState({
          boards: res.data
        });

        console.log(res.data);
        console.log("one");
      })
      .catch(err => console.log(err))
      .then();
    //second API CALL
    this.getExpensive();

    //third API call
    this.getCart();

    //fourth API CALL
    this.getCheapest();

    // FIFTH CALL
    this.getMountain();
    
    // SIXTH CALL
    this.getPowder();

    // SEVENTH CALL
    this.getPark();
    
  }



  // API CALL TO GET MOST EXPENSIVE BOARD

  getExpensive() {
    API.getMostExpensive().then(res => {
      this.setState({
        expensive: res.data,
        powder: this.state.powder

      });
      console.log(res.data);
      console.log("two");
    });
  }
  getCart() {
    API.getCartItems().then(res => {
      this.setState({
        cart: res.data
      });
      console.log(res.data);
      console.log("three");
    });
  }


  getCheapest() {
    API.getLeastExpensive().then(res => {
      this.setState({
        least: res.data,
    
      });
      console.log(res.data);
      console.log("four");
    });
  }
  //API CALL TO GET THE CART
 
  //api call to get all mountain levels

  getMountain() {
    API.getMountain().then(res => {
      this.setState({
        mountain: res.data
      });
      console.log(res.data);
      console.log("five");
    });
  }

  // API CALL TO GET PARK LEVELS

  getPark() {
    API.getParkLevel()
    .then(res => {
      this.setState({
        park: res.data
      });
      console.log(res.data);
      console.log("six");
    });
  }
  getPowder() {
    API.getPowder()
    .then(res => {
      this.setState({
        powder: res.data
      });
      console.log(res.data);
      console.log("seven");
    });
  }

  onRadioChange() {
    API.getOneBoard().then(res => {
      console.log(res.data);
    });
  }

  fetchSort() {
    API.getAllBoards().then(res => {
      this.setState({
        sorted: res.data
      });

      console.log(res.data);
      console.log("least expensive");
    });
  }

  hidePowder = () =>{
    this.setState({
      powder: []
    })
    console.log(this.state.powder);
    console.log('array')
  }

  render() {


    return (
     
      <div className="container">
        <header>
          <div className="container">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">The MotherShip</a>
                </li>
                <li>
                  <a href="#">People</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* <div className='iframe-container'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AxCwlnBCo88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    */}

    {/* 
    change state to that radio button upon click.
    
    */}
    
        <div className="mens">
          <h1>MEN'S</h1>
        </div>
        <div className="container-2">
          <div className="form-1">
            <label>Sort By:</label>
            <div className="radio-group">
              <input
                type="radio"
                name="radio-1"
                value="price-1"
                onClick={this.fetchSort.bind(this)}
              />
              <span>$$$ - $</span>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                name="radio-1"
                value="price-1"
                onClick={this.getExpensive.bind(this)}
              />
              <span>$ - $$$</span>
            </div>
            <div className="radio-group">
              <input type="radio" name="radio-1" value="price-1" />
              <span>Most AWARDS</span>
            </div>
          </div>

          <div className="form-2">
            <label>Best For:</label>
            <div className="radio-group-1">
              <input
                type="checkbox"
                onChange={this.onRadioChange}
                name="radio-1"
                value="price-1"
              />
              <span>SHOW ALL</span>
            </div>
            <div className="radio-group">
              <input type="radio" name="radio-1" value="price-1" onClick={this.getPowder.bind(this)}/>
              <span>POWDER</span>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                name="radio-1"
                value="price-1"
                onClick={this.getMountain.bind(this)}
              />
              <span>ALL MOUNTAIN</span>
            </div>
            <div className="radio-gr">
              <input type="radio" name="radio-1" value="price-1"onClick={this.toggle}/>
            
              <span>PARK</span>
              <div className="container-1">
        {this.state.visibility && this.state.powder
            .sort((a, b) => {
              return a.powder - b.powder;
            })
            .map(sorts => (
              <div className="box-1">
            <img src={sorts.imgUrl} />
                <h4>{sorts.boardName}</h4>
                <p>{sorts.boardTitle}</p>
                <p>{sorts.price}</p>
              </div>
            ))}

        
      </div>
  
            </div>
          </div>
        </div>

        <div className="filt">
  
  
        {/* <h1>ONE</h1>
          {this.state.boards
            .sort((a, b) => {
              return a.price - b.price;
            })
            .map(sorts => (
              <div className="box-1">
                <img src={sorts.imgUrl} />
                <h4>{sorts.boardName}</h4>
                <p>{sorts.boardTitle}</p>
                <p>{sorts.price}</p>
              </div>
            ))} */}
        </div>
        <div className="powderData">
        <h1>TWO</h1>
          {/* {this.state.powder
            .sort((a, b) => {
              return a.powder - b.powder;
            })
            .map(sorts => (
              <div className="box-1">
                <img src={sorts.imgUrl} />
                <h4>{sorts.boardName}</h4>
                <p>{sorts.boardTitle}</p>
                <p>{sorts.price}</p>
              </div>
            ))} */}
              <div className="powderData">
        <h1>THREE</h1>
          {/* {this.state.mountain
            .sort((a, b) => {
              return a.mountain - b.mountain;
            })
            .map(sorts => (
              <div className="box-1">
                <img src={sorts.imgUrl} />
                <h4>{sorts.boardName}</h4>
                <p>{sorts.boardTitle}</p>
                <p>{sorts.price}</p>
              </div>
            ))} */}
        </div>
        </div>
        <div>
          <button onClick={this.fetchSort.bind(this)}>Click me</button>
        </div>
        <div>
          <button onClick={this.getExpensive.bind(this)}>EXPENSIVE</button>
        </div>
        <div>
          <button onClick={this.getMountain.bind(this)}>mountain</button>
        </div>
        <div>
          <button onClick={this.hidePowder}>hide</button>
        </div>
     
      </div>
    );
  }
}


export default Mens;
