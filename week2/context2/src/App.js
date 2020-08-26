import React, { Component } from 'react';

import './App.css';
import { MovieContextConsumer } from './movieContext'
import Header from './Header'


class App extends Component {
 

  state = {
    movie: '',
    movieList: []
  }


  
  

  render(props) {
    // let movieMap = moviesArray.map(arr => {
    //   return `${arr.releaseYear}`
    // })
    return (
      <div className="center">
        <Header></Header>
        <MovieContextConsumer>
          {({ moviesArray, nextMovie,eventListUpdate,handleChange,movie }) => (
            
            <div>
              {/* {onClick(event) {
    this.eventListUpdate();
    nextMovie(movie);
  }} */}
              {/* <p>{(movieName === '' || movieName === " " ? "Nothing is playing": `Current movie playing is ${movieName}`)}</p> */}
              <input
                type="text"
                name="movie"
                placeholder="movieName"
                value={movie}
                onChange={handleChange}
              />
              {/* <h1>{movie}</h1> */}
              <br />
              
              <button className="buttons" onClick={(eventListUpdate)}
              >Submit</button>
              
              {/* This state could be used to update current featured movies(It's not a bug it's a feature) */}
              <button className="buttons" onClick={() => nextMovie(movie)}>update</button>
              <br />
             
              {/* <MovieItems moviesCombined={movieList} /> */}
              <ol>
            {moviesArray.map((movieCombine,index) => <li key={index}>{movieCombine.name}</li>)}
        </ol>
            </div>
          )}
        </MovieContextConsumer>

      
      </div>
    );
  }
}

export default App;
