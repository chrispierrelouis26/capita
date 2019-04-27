import React, { Component } from "react";
import "./Men.css";
import API from "../utils/API";

class Mens extends Component {
  state = {
    boards: [],
    sorted: [],
    expensive: []
  };

  componentDidMount() {
    API.getAllBoards().then(res => {
      this.setState({
        boards: res.data
      });

      console.log(res.data);
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
      console.log("least expensive")
    });
  }
  getPowder() {
    API.getAllBoards().then(res => {
      this.setState({
      expensive: res.data
      });

      console.log(res.data);
      console.log("most expensive")
    });
  }

  render() {
    return (
      <div className="capitaboards">
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
        <div className="mens">
          <h1>MEN'S</h1>
        </div>
        <div className="container-2">
          <div className="form-1">
            <label>Sort By:</label>
            <div className="radio-group">
              <input type="radio" name="radio-1" value="price-1" onClick ={this.fetchSort.bind(this)} />
              <span>$$$ - $</span>
            </div>
            <div className="radio-group">
              <input type="radio" name="radio-1" value="price-1" onClick ={this.getPowder.bind(this)}  />
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
              <input type="radio" name="radio-1" value="price-1" />
              <span>POWDER</span>
            </div>
            <div className="radio-group">
              <input type="radio" name="radio-1" value="price-1" />
              <span>ALL MOUNTAIN</span>
            </div>
            <div className="radio-group">
              <input type="radio" name="radio-1" value="price-1" />
              <span>PARK</span>
            </div>
           
          </div>

  
        </div>

        {/* <div className="container-1">
          {this.state.boards.map(board => (
            <div className="box-1">
              <img src={board.imgUrl} />
              <h4>{board.boardName}</h4>
              <p>{board.boardTitle}</p>
              <p>{board.price}</p>
            </div>
          ))}

          


       
        </div> */}
        <div className = 'filteredData'>
        {this.state.sorted.map(sorts => (
            <div className="box-1">
              <img src={sorts.imgUrl} />
              <h4>{sorts.boardName}</h4>
              <p>{sorts.boardTitle}</p>
              <p>{sorts.price}</p>
            </div>
          ))}
        </div>
        <div className = 'powderData'>
        {this.state.expensive.map(sorts => (
            <div className="box-1">
              <img src={sorts.imgUrl} />
              <h4>{sorts.boardName}</h4>
              <p>{sorts.boardTitle}</p>
              <p>{sorts.price}</p>
            </div>
          ))}
        </div>
    <div>
       <button onClick = {this.fetchSort.bind(this)}>Click me</button>
       
    </div>
    <div>
      <button onClick ={this.getPowder.bind(this)}>click me too</button>
    </div>
      </div>
    );
  }
}

export default Mens;

{
  /* 
// {sort.imgUrl}
//{board.boardName}
//{board.boardTitle}
//{this.state.boards.map(board => () */
}
