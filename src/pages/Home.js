import React from 'react';
import Peliculas from '../components/Peliculas/Peliculas';
import SearchForm from '../components/SearchForm/SearchForm';

function Home(props) {
  return(
    <>
      <div className="formBusqueda" > <SearchForm history={props.history}/>  </div>  

    <Peliculas title = "Peliculas populares" url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"  />
    <Peliculas title = "Peliculas mejores puntuadas" url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'  />
    
    </>
  )
}

export default Home;