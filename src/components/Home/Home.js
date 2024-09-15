
import {Component} from "react"
import PeliculaGrid from "../PeliculaGrid/PeliculaGrid"
class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state ={
            Peliculas: []
        }
    }
    componentDidMount(){
        fetch('')
            .then( response => response.json() )
            .then( data => this.setState(
                {Peliculas: data.results}
                ))
            .catch( error => console.log(error) );

    }
    render (){
        
        return (
            <>
                <section className='card-container'>
                    { this.state.Peliculas.length > 0 ?
                    this.state.Peliculas.map((pelicula, index) => <PeliculaGrid pelicula ={pelicula} key ={index} /> )
                    : 
                    <p>Cargando...</p>  }
                </section>


            </>
        )
    }
   
};
export default Peliculas 