
import './App.css';
import React, { Component } from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home.js';
import Schedule from './Schedule.js';
import Visitors from './Visitors.js';
import Inmates from './Inmates.js';
import Navbar from './Navbar.js';
import { MantineProvider } from '@mantine/core';


class App extends Component {

render(){
  return (
    <MantineProvider>
      <Router>
        <div className="App">
          <header className='App-header'>
            <Navbar/>
          </header>
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel="stylesheet"></link>
          <body>
            <Routes>
                <Route path="/" element={< HomePage/>}/>
                <Route path="/dashboard" element={< HomePage/>}/>
                <Route path="/schedule" element={< Schedule/>}/>
                <Route path="/visitors" element={< Visitors/>}/>
                <Route path="/inmates" element={< Inmates/>}/>
            </Routes>
          </body>
        </div>
      </Router> 
     </MantineProvider>
    );
  }
  }

export default App;
