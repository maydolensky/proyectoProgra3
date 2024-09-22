import React, { Component } from 'react'
import { options } from '../options'
import PeliculaGrid from '../components/PeliculaGrid/PeliculaGrid'

export default class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculas: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}`, options)
        .then( response => response.json() )
        .then( data  => this.setState({peliculas:data.results}
            
        ))
        .catch( error => console.log(error) );
    }
  render() {
    console.log (this.state.peliculas)
    return (
        <> {this.state.peliculas > 0?  <> <div> Resultados de busqueda para:  {this.props.location.state.query}</div>
      <PeliculaGrid  peliculas = {this.state.peliculas} /></>
        : <> <div> <p>  No encontramos resultados de busqueda de:  {this.props.location.state.query} </p>
        <iframe src="https://giphy.com/embed/OPU6wzx8JrHna" width="600" height="600" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spongebob-squarepants-sad-OPU6wzx8JrHna"></a></p> </div></> }

     
      </>


    )
  }
}

