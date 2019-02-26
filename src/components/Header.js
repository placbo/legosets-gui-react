import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';


function Header(props) {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li className="rightMenuItem"><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
