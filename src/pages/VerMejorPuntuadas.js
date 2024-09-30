import React, { Component } from 'react'
import { options } from "../options";
import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid";
import Loader from '../components/Loader/Loader';
export default class VerMejorPuntuadas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1,
            peliculas: [],
            PelisFiltradas: [],
            filterValue: "",
            loading: true
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${this.state.value}`, options)
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results, PelisFiltradas: data.results, loading: false }))
            .catch((error) => {
                this.setState({ loading: false })
                console.log(error)

            });
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
    }


    handleFilterChange(e) {
        const userValue = e.target.value
        this.setState({
            filterValue: userValue,
            PelisFiltradas: this.state.peliculas.filter(peliculas => peliculas.title.toLowerCase().includes(userValue.toLowerCase()))
        })
    }
    handleResetFilter() {
        this.setState({
            filterValue: "",
            PelisFiltradas: this.state.peliculas
        })

    }


    render() {
        if (this.state.loading) {
            return <Loader />

        }
        else if (this.state.PelisFiltradas.length === 0) {

            return (<div>
                <div className='form_busqueda'> 
                <input type="text" onChange={(e) => this.handleFilterChange(e)} value={this.state.filterValue} />
                <button onClick={() => this.handleResetFilter()}>Resetear Filtro</button>

                </div>
                
                <p>  No encontramos resultados de busqueda </p>
                <iframe src="https://giphy.com/embed/OPU6wzx8JrHna" width="600" height="600"  title='gif de patricio' allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spongebob-squarepants-sad-OPU6wzx8JrHna"></a></p> </div>)


        }
        else {
            return (
                <>
                    <h1>Peliculas Mejores Puntuadas</h1>
                    <div className='form_busqueda'> 
                    <input type="text" onChange={(e) => this.handleFilterChange(e)} value={this.state.filterValue} />
                    <button onClick={() => this.handleResetFilter()}>Resetear</button>
                    </div>
                    <PeliculaGrid peliculas={this.state.PelisFiltradas} />
                    <button onClick={() => this.handleIncrement()}>Ver mas</button>

                </>
            )

        }

    }
}