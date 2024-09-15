import React from 'react';

function Navbar(props){

    return (
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((unMenu, idx)=> <li>{unMenu}</li>)
                    
                }
            </ul>
            <ul className="user">
                <li>Nombre usuario </li>
            </ul>
        </nav>
    )
}

export default Navbar