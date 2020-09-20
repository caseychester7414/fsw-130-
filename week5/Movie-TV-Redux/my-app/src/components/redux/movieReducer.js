const initState = []
const movieReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_MOVIE':
            return [...state, {...action.payload}]
   default: 
    return state
}
}

export default movieReducer