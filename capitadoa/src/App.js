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
      <ul>
        <li>
        ext of thn the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containi
        </li>
      </ul>
     
      {/* <div className='iframe-container'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AxCwlnBCo88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    */}
      <div className='mens'> 
       <h1>MEN'S</h1>
       </div>
     
  <div className = 'container-1'>
  
  {this.state.boards.map(board => (
<div className='box-1'>
<img src = {board.imgUrl}/>
<h4>{board.boardName}</h4>
<p>{board.boardTitle}</p>
</div>
))}
</div>
</div>


      
      
    );
  }
}

export default App;

{/* 
// {board.imgUrl}
//{board.boardName}
//{board.boardTitle}
//{this.state.boards.map(board => () */}