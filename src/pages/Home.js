import React from 'react';
import Peliculas from '../components/Peliculas/Peliculas';
import SearchForm from '../components/SearchForm/SearchForm';
function Home() {
  return(
    <>
    <Peliculas title = "Peliculas populares" url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"  />
    <Peliculas title = "Peliculas mejores puntuadas" url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'  />
    
    </>
  )
}

export default Home;