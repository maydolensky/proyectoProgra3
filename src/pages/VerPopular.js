import React, { Component } from 'react'
import { options } from "../options";
import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid";

export default class VerPopular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      peliculas: [],
      PelisFiltradas: [],
      filterValue: ""
    }
  }
  handleIncrement() {
    const mas = this.state.value + 1;
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${mas}`, options)
      .then(response => response.json())
      .then(data => this.setState(pelisAntes => ({
        peliculas: this.state.peliculas.concat(data.results),
        PelisFiltradas: this.state.peliculas.concat(data.results),
        value: mas
      })))
      .catch(error => console.log(error));
  };
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.value}`, options)
      .then(response => response.json())
      .then(data => this.setState({ peliculas: data.results, PelisFiltradas: data.results}))
      .catch(error => console.log(error));
  }
handleFilterChange(e){
  const userValue = e.target.value
  this.setState({
    filterValue: userValue,
    PelisFiltradas: this.state.peliculas.filter(peliculas => peliculas.title.toLowerCase().includes(userValue.toLowerCase()))
  })
}
handleResetFilter(){
  this.setState({
    filterValue: "",
    PelisFiltradas: this.state.peliculas
  })
}
  render() {
    return (
      <>
        <h1>Peliculas Populares</h1>
        <input type="text" onChange={(e)=> this.handleFilterChange(e)} value= {this.state.filterValue}/>
        <button onClick={()=> this.handleResetFilter()}>Reset Filter</button>
        <PeliculaGrid peliculas={this.state.PelisFiltradas} />
        <button onClick={() => this.handleIncrement()}>Ver mas</button>
      </>
    )
  }
}

