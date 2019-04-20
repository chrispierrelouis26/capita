import React, { Component } from 'react';
// import logo from './images/logo.png';
import './App.css';
import API from './utils/API'
import Mens from './Components/MensPage'

class App extends Component {
  render() {
    return (
  <div>
<Mens />
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