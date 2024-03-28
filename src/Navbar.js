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
                                <Link to="/dashboard"><p>Dashboard</p></Link>
                                </li>
                            </div>
                        
                            <div className="nav-pack">
                                <li className="nav-item">
                                <span className="material-icons">calendar_month</span>
                                <Link to="/schedule"><p>Schedule</p></Link>
                                </li>
                            </div>

                            <div className="nav-pack">
                                <li className="nav-item">
                                <span className="material-icons">group</span>
                                <Link to="/visitors"><p>Visitors</p></Link>
                                </li>
                            </div>
                            
                            <div className="nav-pack">
                                <li className="nav-item">
                                <span className="material-icons">perm_contact_calendar</span>
                                <Link to="/inmates"><p>Inmates</p></Link>
                                </li>
                            </div>

                            <div className="nav-pack">
                                <li className="nav-item">
                                    <span className="material-icons">ballot</span>
                                    <Link to="/users-list"><p>Users List</p></Link>
                                </li>
                            </div>

                            <div className="nav-pack2">
                                <li className="nav-item">
                                    <span className="material-icons">contact_support</span>
                                    <Link to="/support"><p>Support</p></Link>
                                </li>
                                <li className="nav-item">
                                    <span className="material-icons">report</span>
                                    <Link href="/report-technical"><p>Report Technical</p></Link>
                                </li>
                            </div>
                            
                        </ul>
        </nav>
)}