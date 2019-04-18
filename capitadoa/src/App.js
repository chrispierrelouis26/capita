import React, { Component } from 'react';
// import logo from './images/logo.png';
import './App.css';
import API from './utils/API'

class App extends Component {
state = {
  boards: []
}

componentDidMount(){
API
.getAllBoards()
.then(res => this.setState({boards: res.data}))


}
  
  render() {
    return (
      <div className="capitaboards">
      <div className="marquee">
     
      <marquee direction ="left" scrollamount ="10" onmouseover="this.stop();" onmouseout="this.start();">
      <ul>
        <li>
        ext of thn the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containi
        </li>
      </ul>
      </marquee>
      </div>
      {/* <div>
        <img src ={logo}></img>
        </div> */}
      <div className='iframe-container'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AxCwlnBCo88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className ='container'>
  <h1>Capita Boards</h1>
  <div className="flex-container">
  {this.state.boards.map(board => (
    <div>
    <img className ='img' src = {board.imgUrl}/>
    <div className ='card-body'>
    <h4 className='name'>{board.boardName}</h4>
   <p className='title'>{board.boardTitle}</p>
      </div>
    
   
      </div>
  
  ))}


</div>
      </div>
      </div>
    
    );
  }
}

export default App;
