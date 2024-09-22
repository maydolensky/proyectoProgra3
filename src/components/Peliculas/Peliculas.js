import {Component} from "react";
import PeliculaGrid from "../PeliculaGrid/PeliculaGrid";
import { options } from "../../options";

class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state ={
            peliculas: [],
            peliculasFavoritas: [],
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
                this.setState({ peliculasFavoritas: favoritas });
            })
            .catch(error => console.log(error));
        } else {
            fetch(this.props.url, options)
                .then(response => response.json())
                .then(data => {
                    this.setState({ peliculas: data.results });
                })
                .catch(error => console.log(error));
        }
    }
    render (){
        const { peliculasFavoritas, peliculas } = this.state;

        if (this.props.favoritosIds && peliculasFavoritas.length === 0) {
            return <p>No tienes películas favoritas aún.</p>;
        }

        return (
            <>

                <section>
                    <h2>{this.props.title}</h2>
                <PeliculaGrid peliculas={peliculasFavoritas.length > 0 ? peliculasFavoritas : peliculas} /> 
                </section>

            </>
        )
    }
   
};
export default Peliculas 