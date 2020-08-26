import React, { Component } from 'react'
import moviesArray from  './moviesArray'
const { Provider, Consumer } = React.createContext()

class MovieContextProvider extends Component {
    state = {
        movieName: "Lorem",
        moviesArray:moviesArray  || [],
        movie:"",

    } 
    handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }
      eventListUpdate = (event) => {
        event.preventDefault()
        this.setState(prevState =>({
          moviesArray:[...prevState.moviesArray,{name:this.state.movieName}],
          movie: ''
        }))
        console.log(this.state.moviesArray)
      }
    

    nextMovie = (movieName) => {
        this.setState({movieName})
    }
    

    render() {
        const {movieName, moviesArray,movie} = this.state
        const {handleChange,eventListUpdate,nextMovie}= this
        return (
            <Provider value={{movieName, nextMovie,eventListUpdate,handleChange,moviesArray,movie}}>
                {this.props.children}
            </Provider>
        )
    }
}

export { MovieContextProvider, Consumer as MovieContextConsumer }
