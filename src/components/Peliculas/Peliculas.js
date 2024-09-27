import { Component } from "react";
import PeliculaGrid from "../PeliculaGrid/PeliculaGrid";
import { options } from "../../options";
import Loader from "../Loader/Loader";
import "./Peliculas.css"

import { Link } from "react-router-dom";

class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            peliculasFavoritas: [],
            loading: true 
        }
    }

    componentDidMount() {
        
        if (this.props.favoritosIds && this.props.favoritosIds.length > 0) {
            Promise.all(
                this.props.favoritosIds.map(id =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
                        .then(response => response.json())
                )
            )
                .then(favoritas => {
                    this.setState({ peliculasFavoritas: favoritas , loading: false});
                })
                .catch((error) => {
                    this.setState({ loading: false })
                    console.log(error)
                  });
        } else {
            fetch(this.props.url, options)
                .then(response => response.json())
                .then(data => {
                    this.setState({ peliculas: data.results, loading: false });
                })
                .catch((error) => {
                    this.setState({ loading: false })
                    console.log(error)
                  });
        }
    }
    render() {
        const { peliculasFavoritas, peliculas } = this.state;
        
        if (this.state.loading) { 
            return ( <Loader/> )
        }
        else{
            return (
                <>
    
                    <section>
                        <h2>{this.props.title}</h2>
    
                        {this.props.link && (
                            <Link to={this.props.link}>
                                <button className="button_pelis"> Ver todas </button>
                            </Link>)
                        }
                        <PeliculaGrid peliculas={peliculasFavoritas.length > 0 ? peliculasFavoritas : peliculas.filter((pelicula, index) => index < 5)} />
                    </section>
    
                </>
            )

        }


            
    }

};
export default Peliculas 