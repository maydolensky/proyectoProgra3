import React from "react"
import { Link } from "react-router-dom"
import { Component } from 'react';
import "./Card.css"
import FavButton from "../FavButton/FavButton"


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showExtra: false,
        }
    }

    handleShowExtra() {
        this.setState({
            showExtra: !this.state.showExtra
        })
    }

    render(props) {
        const { pelicula } = this.props

        return (

            <div className="pelis-card">
                <Link to={`/Detalle/id/${pelicula.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w300/${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title} />
                </Link>
                <h4>  {this.props.pelicula.title} </h4>
                <button className="button" onClick={() => this.handleShowExtra()}>{this.state.showExtra ? "Ocultar descripción" : "Ver descripción"}</button>
                <section className='extra'>
                    <p className={this.state.showExtra ? "show" : "hide"}> {this.props.pelicula.overview} </p>
                </section>
                <Link to={`/Detalle/id/${pelicula.id}`}>
                    <button className="button">Ver detalle</button>
                </Link>
                <FavButton idPelicula={this.props.pelicula.id} />


            </div>

        );
    };
}



export default Card