import React from 'react';
import "./Navbar.css"

function Navbar(props){

    return (
        <nav>
             <ul className="user">
                <li> <img src="./img/pelis+.png" alt=""/></li>
            </ul>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((unMenu, idx)=> <li>{unMenu}</li>)
                    
                }
            </ul>
           
        </nav>
    )
}

export default Navbar