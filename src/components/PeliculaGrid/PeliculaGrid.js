import Card from "../Card/Card"
import "./PeliculaGrid.css"

const PeliculaGrid = (props) => {
    console.log("Películas recibidas en PeliculaGrid:", props.peliculas); // Verificar las películas recibidas
   
    return (
        <section  className="card-container">
                    { props.peliculas.length  ?
                    props.peliculas.map((pelicula, index) => (<Card pelicula ={pelicula} key ={index} />) )
                    : 
                    <p>Cargando...</p>  }

            
        </section>


    )
}
export default PeliculaGrid