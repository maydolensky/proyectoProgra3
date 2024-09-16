import Peliculas from "../Peliculas/Peliculas";
import Card from "../Card/Card"

const PeliculaGrid = (props) => {
    
    return (
        <section >
                    { props.peliculas.length > 0 ?
                    props.peliculas.map((pelicula, index) => (<Card pelicula ={pelicula} key ={index} />) )
                    : 
                    <p>Cargando...</p>  }

            
        </section>


    )
}
export default PeliculaGrid