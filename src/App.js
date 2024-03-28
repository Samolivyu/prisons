
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
    <MantineProvider defaultColorScheme='dark'>
      <Router>
        <body>
        <div className="App">
          <header className='App-header'>
            <Navbar/>
          </header>
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel="stylesheet"></link>
            <Routes>
                <Route path="/" element={< HomePage/>}/>
                <Route path="/dashboard" element={< HomePage/>}/>
                <Route path="/schedule" element={< Schedule/>}/>
                <Route path="/visitors" element={< Visitors/>}/>
                <Route path="/inmates" element={< Inmates/>}/>
            </Routes>
        </div>
        </body>
      </Router> 
     </MantineProvider>
    );
  }
  }

export default App;
