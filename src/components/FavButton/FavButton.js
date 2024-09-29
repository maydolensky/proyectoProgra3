import React, { Component } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './FavButton.css'

class FavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFav: false,
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos');
        if (storage) {
            const parsedArray = JSON.parse(storage);
            const estaEnFavs = parsedArray.includes(this.props.idPelicula);
            this.setState({
                esFav: estaEnFavs
            });
        }
    }

    agregarFavs = () => {
        const storage = localStorage.getItem('favoritos');
        let parsedArray = storage ? JSON.parse(storage) : [];

        if (!parsedArray.includes(this.props.idPelicula)) {
            parsedArray.push(this.props.idPelicula);
            localStorage.setItem('favoritos', JSON.stringify(parsedArray));
            this.setState({ esFav: true });
        }
    };

    sacarFavs = () => {
        const storage = localStorage.getItem('favoritos');
        if (storage) {
            let parsedArray = JSON.parse(storage);
            parsedArray = parsedArray.filter(id => id !== this.props.idPelicula);
            localStorage.setItem('favoritos', JSON.stringify(parsedArray));
            this.setState({ esFav: false });
        }
    };

    render() {
        return (
            <button
                onClick={() => this.state.esFav ? this.sacarFavs() : this.agregarFavs()}
                className="favorite-button"
            >
                {this.state.esFav ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
            </button>
        );
    }
}


export default FavButton;

