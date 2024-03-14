
import './App.css';
import React, { Component } from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home.js';
import Schedule from './Schedule.js';
import Visitors from './Visitors.js';
import Inmates from './Inmates.js';
import Navbar from './Navbar.js';


class App extends Component {

render(){
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <Navbar/>
        </header>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel="stylesheet"></link>
        <body>
          <Routes>
          <Route path="/" exact component={<HomePage/>}/>
          <Route path="/dashboard" component={<HomePage/>}/>
          <Route path="/schedule" component={<Schedule/>}/>
          <Route path="/visitors" component={<Visitors/>}/>
          <Route path="/inmates" component={<Inmates/>}/>
          </Routes>
        </body>
      </div>
     </Router> 
    );
  }
  }

export default App;
