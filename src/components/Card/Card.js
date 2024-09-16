import React from "react"
import { Link } from "react-router-dom"
import { Component } from 'react';
import PeliculasGrid from "../PeliculaGrid/PeliculaGrid"
import "./Card.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showExtra: false,

            
           
        }
    }

    handleShowExtra(){
        this.setState({
            showExtra: !this.state.showExtra
        })
    }

    render(props) {

         return (
        <div >
                <img src={this.props.pelicula.poster_path} alt={this.props.pelicula.title} />
                <h4>  {this.props.pelicula.title} </h4>
                <button  onClick={()=>this.handleShowExtra()}>{this.state.showExtra ? "Ocultar descripción" : "Ver descripción"}</button>
            <section className='extra'>
                <p className={this.state.showExtra ? "show" : "hide"}> {this.props.pelicula.overview} </p> 
            </section>
            
                
        </div>
        );
    };
}



export default Card