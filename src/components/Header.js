import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
        };
    }

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        {this.state.isAuthenticated ? (
                            <li className="rightMenuItem"><Link to='/'>Log out (not working)</Link></li>
                        ) : (
                            <li className="rightMenuItem"><Link to='/login'>Log in</Link></li>
                        )}

                    </ul>
                </nav>
            </header>
        );
    }

}

export default Header;
