import React, { Component } from 'react'
import { options } from '../options'
import PeliculaGrid from '../components/PeliculaGrid/PeliculaGrid'
import Loader from '../components/Loader/Loader'

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculas: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}`, options)
      .then(response => response.json())
      .then(data => this.setState({ peliculas: data.results, loading: false }
      ))
      .catch((error) => {
        this.setState({ loading: false })
        console.log(error)
      });
  }
  render() {


    if (this.state.loading) {
      return <Loader/>
    } else if (this.state.peliculas.length > 0) {
      return (
        <> <div className='no_hay_resultados'> Resultados de busqueda para:  {this.props.location.state.query}</div>
          <PeliculaGrid peliculas={this.state.peliculas} /></>
      )
    } else {
      return (
        <div className="iframe-container" > 
        <p className='no_hay_resultados'>  No encontramos resultados de busqueda de:  {this.props.location.state.query} </p>
        <iframe src="https://giphy.com/embed/OPU6wzx8JrHna"  className="responsive-iframe" title='gif de patricio' ></iframe><p><a className='link' href="https://giphy.com/gifs/spongebob-squarepants-sad-OPU6wzx8JrHna"> gif patricio </a></p> 
        
        </div>)

    }


  }
}

