import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            desplegable: false,
        }
    
    }
handleDesplegable = () =>{
    this.setState({
        desplegable: !this.state.desplegable
    })
}
render (){
    return (
        <nav>
            <ul className="user">
                <li> <img src="/img/Movies.png" alt="" /></li>
            </ul>
            <div className = {`menu-icon ${this.state.desplegable ? "active": ""}`}onClick={this.handleDesplegable}>
                <i className='fas fa-bars'></i>
            </div>
            <ul className= {`main-nav ${this.state.desplegable ? "active": ""}`}>
                {this.props.elementosMenu.map((unMenu, idx) => (
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
}
export default Navbar