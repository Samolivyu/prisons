import React from "react";
import './Navbar.css';

export default function NavBar(){
    return <nav className="navbar">
              <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel="stylesheet"></link>
            <a href="/" className="gOk-logo">GoK Logo</a>
            <ul>
                <div className="nav-pack">
                    <li className="nav-item">
                    <span className="material-icons">dashboard</span>
                    <a href="/dashboard">Dashboard</a>
                    </li>
                </div>
               
                <div className="nav-pack">
                    <li className="nav-item">
                    <span className="material-icons">calendar_month</span>
                    <p><a href="/schedule">Schedule</a></p>
                    </li>
                </div>

                <div className="nav-pack">
                    <li className="nav-item">
                    <span className="material-icons">group</span>
                    <a href="/visitors">Visitors</a>
                    </li>
                </div>
                
                <div className="nav-pack">
                    <li className="nav-item">
                     <span className="material-icons">perm_contact_calendar</span>
                    <a href="/inmates">Inmates</a>
                    </li>
                </div>

                <div className="nav-pack">
                    <li className="nav-item">
                        <span className="material-icons">ballot</span>
                        <a href="/users-list">Users List</a>
                    </li>
                </div>
                <div className="nav-pack2-pack"></div>

               <div className="nav-pack2">
                    <li className="nav-item">
                        <span className="material-icons">contact_support</span>
                        <a href="/support">support</a>
                    </li>
                    <li className="nav-item">
                        <span className="material-icons">report</span>
                        <a href="/report-technical">report_technical</a>
                    </li>
                </div>
                
            </ul>
    </nav>
}