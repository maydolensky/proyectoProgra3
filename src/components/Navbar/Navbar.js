import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import SearchForm from '../SearchForm/SearchForm';

function Navbar(props) {

    return (
        <nav>
            <ul className="user">
                <li> <img src="./img/pelis+.png" alt="" /></li>
            </ul>
            <ul className="main-nav">
                {props.elementosMenu.map((unMenu, idx) => (
                    <li key={idx}>
                        {unMenu.link ? (
                            <Link to={unMenu.link}>{unMenu.name}</Link>
                        ) : (
                            unMenu
                        )}
                    </li>
                ))
                }
            </ul>

        </nav >
    )
}

export default Navbar