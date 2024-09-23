import React, { Component } from 'react';
import Peliculas from '../components/Peliculas/Peliculas';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritosIds: [],
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos');
        const favoritosIds = storage ? JSON.parse(storage) : [];
        this.setState({ favoritosIds });
    }

    render() {
        const { favoritosIds } = this.state;

        return (
            <div>
                {favoritosIds.length === 0 ? (
                    <p>Aún no tienes películas favoritas</p>
                ) : (
                    <Peliculas
                        title="Mis películas favoritas"
                        favoritosIds={favoritosIds}
                    />
                )}
            </div>
        );
    }
}

export default Favoritos;





