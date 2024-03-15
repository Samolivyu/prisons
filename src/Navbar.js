import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function NavBar(){

    return(
        <nav className="navbar">
                <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel="stylesheet"></link>
                        <a href="/" className="gOk-logo">GoK Logo</a>
                        <ul>
                            <div className="nav-pack">
                                <li className="nav-item">
                                <span className="material-icons">dashboard</span>
                                <Link to="/dashboard">Dashboard</Link>
                                </li>
                            </div>
                        
                            <div className="nav-pack">
                                <li className="nav-item">
                                <span className="material-icons">calendar_month</span>
                                <Link to="/schedule">Schedule</Link>
                                </li>
                            </div>

                            <div className="nav-pack">
                                <li className="nav-item">
                                <span className="material-icons">group</span>
                                <Link to="/visitors">Visitors</Link>
                                </li>
                            </div>
                            
                            <div className="nav-pack">
                                <li className="nav-item">
                                <span className="material-icons">perm_contact_calendar</span>
                                <Link to="/inmates">Inmates</Link>
                                </li>
                            </div>

                            <div className="nav-pack">
                                <li className="nav-item">
                                    <span className="material-icons">ballot</span>
                                    <Link to="/users-list">Users List</Link>
                                </li>
                            </div>
                            <div className="nav-pack2-pack"></div>

                            <div className="nav-pack2">
                                <li className="nav-item">
                                    <span className="material-icons">contact_support</span>
                                    <Link to="/support">support</Link>
                                </li>
                                <li className="nav-item">
                                    <span className="material-icons">report</span>
                                    <Link href="/report-technical">report_technical</Link>
                                </li>
                            </div>
                            
                        </ul>
        </nav>
)}