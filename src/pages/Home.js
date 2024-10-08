import React from 'react';
import Peliculas from '../components/Peliculas/Peliculas';
import SearchForm from '../components/SearchForm/SearchForm';

function Home(props) {
  return (
    <>
      <div > <SearchForm history={props.history} />  </div>

      <Peliculas title="Peliculas populares" url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" link="/VerPopular" />
      <Peliculas title="Peliculas mejores puntuadas" url='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' link="/VerMejorPuntuadas" />

    </>
  )
}

export default Home;