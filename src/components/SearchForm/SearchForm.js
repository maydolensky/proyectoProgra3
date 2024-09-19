import React, { Component } from 'react'
import "./SearchForm.css"

export class SearchForm extends Component {
    
  constructor(props){
    super(props)
    this.state={
      query: ""
    }
  }  
  handleInputChange(e){
    this.setState({
      query: e.target.value

    })
  }
  handleInputSubmit(){
    this.props.history.push('/SearchResults/', {query:this.state.query})
    
  }

  
  render() {
    console.log(this.state.query)
    return (
      <div>

        <input onChange={(e)=> this.handleInputChange(e)} type='text' name='query' value={this.state.query}/> 



        <button onClick={()=> this.handleInputSubmit()}> SearchResults </button> 
        
        
        </div>
    )
  }
}

export default SearchForm