import React, { Component } from 'react';
import FavButton from '../FavButton/FavButton';
import { options } from '../../options';
import './DetallePelicula.css'
import Loader from '../Loader/Loader';

class DetallePelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
      .then(data => {
        this.setState({ pelicula: data, loading: false});
      })
      .catch((error) => {
        this.setState({ loading: false })
        console.log(error)
      });
  }

  render() {
    const { pelicula } = this.state;


    if (this.state.loading) {
      return <Loader/>
    } else {
      return (

        <div className="detalle-pelicula">
          <img src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={pelicula.title} />
          <h3>{pelicula.title}</h3>
          <p><strong>Calificación:</strong> {pelicula.vote_average}</p>
          <p><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
          <p><strong>Duración:</strong> {pelicula.runtime} minutos</p>
          <p><strong>Sinopsis:</strong> {pelicula.overview}</p>
          <p><strong>Género:</strong> {pelicula.genres.map(g => g.name).join(', ')}</p>
          <FavButton idPelicula={pelicula.id} />
        </div>
      );  }
  }
}

export default DetallePelicula;


