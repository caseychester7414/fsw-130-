import React from 'react'

function MovieItems(props) {
    return(
        <ol>
            {props.moviesCombined.map(movieCombine => <li key={movieCombine}>{movieCombine}</li>)}
        </ol>
    )
}

export default MovieItems