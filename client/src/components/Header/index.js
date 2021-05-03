import React from "react";
import './style.css';
import { Jumbotron } from 'react-bootstrap';

function Header() {
    return (
        <div className="jumbotron">
            <Jumbotron>
                <h1><b>Tim Morse Portfolio</b></h1>
            </Jumbotron>
        </div>
    );
}

export default Header;