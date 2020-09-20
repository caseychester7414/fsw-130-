module.exports.addTvShow = function addTvShow(title) {
    return {
        type: "ADD_TV_SHOW",
        payload: title
    }
}

module.exports.removeTvShow = function removeTvShow(title) {
    return {
        type: "REMOVE_TV_SHOW",
        payload: title
    }
}

module.exports.allTvShow = function allTvShows() {
    return {
        type: "ALL_TV_SHOWS"
    }

}
const initalState = ["Gummie Bears", "DarkWing Duck", "Animaniacs"]

module.exports.tvShowReducer = function tvShowReducer(tvShows = initalState, action) {
    switch (action.type) {
        case "ADD_TV_SHOW": 
            return [...tvShows, action.payload]
        

        case "REMOVE_TV_SHOW": 
            const updatedArr = tvShows.filter(title => title.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr

        
        case "ALL_TV_SHOWS": 
            return tvShows

        
        default: 
            return tvShows
    }
}