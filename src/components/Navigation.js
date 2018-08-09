import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';


// Navigation 

class Navigation extends Component {
    
    render () {
        return (
            <div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <NavLink to="/planes">Planes</NavLink>
                        </li>
    
                        <li>
                            <NavLink to="/trains">Trains</NavLink>
                        </li>
    
                        <li>
                            <NavLink to="/automobiles">Automobiles</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
};


export default Navigation;