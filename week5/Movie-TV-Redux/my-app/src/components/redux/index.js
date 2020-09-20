import {combineReducers} from 'redux'
import movieReducer from './movieReducer'
import tvReducer from './tvReducer'


const reducers = combineReducers({
    movie: movieReducer,
    tv: tvReducer
})

export default reducers