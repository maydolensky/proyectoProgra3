    {/*   import React, { Component } from 'react'
        import {options} from "../options";
        import PeliculaGrid from "../components/PeliculaGrid/PeliculaGrid";

        export default class VerMejorPuntuadas extends Component {
            constructor(props){
                super(props)
                this.state ={
                    value: 1,
                    peliculas:[],
                    peliculasFiltrado:[],
                    filtro:""
                }
            }

            handleFilterChange(){
                this.setState({
                peliculasFiltrado: peliculas.filter(peliculas => peliculas.title.includes(this.state.filtro) )
                })
                };

            handleInputSubmit(){
                    this.props.history.push('/VerMejorPuntuadas', {filtro:this.state.filtro})
                    
                };
            handleInputChange(e){
                    this.setState({
                    filtro: e.target.value
                
                    })
                }
            
            

            handleIncrement() {
                const mas = this.state.value + 1;
                fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${mas}`, options)
                .then(response => response.json())
                .then(data => this.setState(pelisAntes => ({
                    peliculas: [...pelisAntes.peliculas, ...data.results], 
                    value: mas 
                })))
                .catch(error => console.log(error));
            };
                
            componentDidMount(){
                fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${this.state.value}`, options)
                .then(response => response.json())
                .then(data => this.setState({peliculas:data.results}))

                .catch(error => console.log(error));
                }
        
            
        render() {
            return (
            <>
                <input onChange={this.handleFilterChange(e)} type='text ' name='filter' value={this.state.filtro}/> 
                <button onClick={()=> this.handleInputSubmit()}> Filtrar </button>
                <PeliculaGrid peliculas= {this.state.peliculas}/>

                <button onClick={() => this.handleIncrement() }>Ver mas</button>

                
            </>
            )
        }
}  */ }

