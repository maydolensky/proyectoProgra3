import Card from "../Card/Card"
import "./PeliculaGrid.css"

const PeliculaGrid = (props) => {
    const peliculasLimitadas = props.peliculas.filter((pelicula, index) => index < 5);
    return (
        <section  className="card-container">
                    { peliculasLimitadas.length  ?
                    peliculasLimitadas.map((pelicula, index) => (<Card pelicula ={pelicula} key ={index} />) )
                    : 
                    <p>Cargando...</p>  }

            
        </section>


    )
}
export default PeliculaGrid