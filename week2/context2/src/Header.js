import React, { Component } from 'react'
import {MovieContextConsumer} from './movieContext'

class Header extends Component {
    render() {
        return(
            <MovieContextConsumer>
                {({movieName}) => { 
                    console.log(movieName)
                   return  (
                    <header>
                        <h1>{(movieName === '' || movieName === " " ? "Nothing is playing": `Current movie playing is ${movieName}`)}</h1>
                    </header>
                )}}

                
            </MovieContextConsumer>
        )
    }
}

export default Header