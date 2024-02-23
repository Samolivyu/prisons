
import './App.css';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
// import HomePage from './home.js';
// import Schedule from './Schedule.js';
import Visitors from './Visitors.js';
import Inmates from './Inmates.js';
import Navbar from './Navbar.js';


function App() {
  return (
    
    <div className="App">
      <header className='App-header'>
        <Navbar/>
      </header>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel="stylesheet"></link>
      <body>
        {/* <HomePage/> */}
              {/* <Schedule/> */}
            {/* <Visitors/> */}
            <Inmates/>
      </body>
    </div>

    );
  }

export default App;
