import {Component} from "react"
import PeliculaGrid from "../PeliculaGrid/PeliculaGrid"
import { options } from "../../options"
class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state ={
            Peliculas: []
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then( response => response.json() )
            .then( data => this.setState(
                {Peliculas: data.results}
                ))
            .catch( error => console.log(error) );

    }
    render (){
        
        return (
            <>
                <section>
                    { this.state.Peliculas.length > 0 ?
                    this.state.Peliculas.map((pelicula, index) => (<PeliculaGrid pelicula ={pelicula} key ={index} />) )
                    : 
                    <p>Cargando...</p>  }
                </section>


            </>
        )
    }
   
};
export default Peliculas 