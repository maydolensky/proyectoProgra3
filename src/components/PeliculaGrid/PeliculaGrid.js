import Card from "../Card/Card"
import Loader from "../Loader/Loader";
import "./PeliculaGrid.css"

const PeliculaGrid = (props) => {

    return (
        <section className="cards_container">
            {props.peliculas.length > 0 ?
                props.peliculas.map((pelicula, index) => (<Card pelicula={pelicula} key={index} />))
                : <Loader/>

            }


        </section>


    )
}
export default PeliculaGrid