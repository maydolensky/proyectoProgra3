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
        <> 
      <div> Resultados de busqueda para:  {this.props.location.state.query}</div>
      <PeliculaGrid  peliculas = {this.state.peliculas} />

      </>


    )
  }
}

