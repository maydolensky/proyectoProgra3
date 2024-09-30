import Card from "../Card/Card"
import "./PeliculaGrid.css"

const PeliculaGrid = (props) => {
    console.log("Películas recibidas en PeliculaGrid:", props.peliculas); // Verificar las películas recibidas

    return (
        <section className="cards_container">
            {props.peliculas.length > 0 ?
                props.peliculas.map((pelicula, index) => (<Card pelicula={pelicula} key={index} />))
                : <>
                    <iframe src="https://giphy.com/embed/I35sKRqcrxHDIAbIEs" width="480" height="480" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cartoon-popcorn-lurk-I35sKRqcrxHDIAbIEs"></a></p></>


            }


        </section>


    )
}
export default PeliculaGrid