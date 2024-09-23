import React, { Component } from 'react'
import { options } from "../options";
import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid";

export default class VerPopular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      peliculas: []
    }
  }
  handleIncrement() {
    const mas = this.state.value + 1;
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${mas}`, options)
      .then(response => response.json())
      .then(data => this.setState(pelisAntes => ({
        peliculas: [...pelisAntes.peliculas, ...data.results],
        value: mas
      })))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.value}`, options)
      .then(response => response.json())
      .then(data => this.setState({ peliculas: data.results }))

      .catch(error => console.log(error));
  }


  render() {
    return (
      <>
        <PeliculaGrid peliculas={this.state.peliculas} />
        <button onClick={() => this.handleIncrement()}>Ver mas</button>
      </>
    )
  }
}

