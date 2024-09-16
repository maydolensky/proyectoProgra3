import {Component} from "react"
import PeliculaGrid from "../PeliculaGrid/PeliculaGrid"
import { options } from "../../options"
class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state ={
            url: this.props.url,
            title: this.props.title,
            link: this.props.link,
            peliculas: []
        }
    }
    componentDidMount(){
        fetch(this.props.url, options)
            .then( response => response.json() )
            .then( data => this.setState(
                {peliculas: data.results}
                ))
            .catch( error => console.log(error) );

    }
    render (){
        
        return (
            <>

                <section>
                   <h2>{this.props.title}</h2>

                    <PeliculaGrid  peliculas = {this.state.peliculas} />
                </section>

            </>
        )
    }
   
};
export default Peliculas 