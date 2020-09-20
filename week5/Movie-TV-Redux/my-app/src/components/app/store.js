import {createStore} from 'redux'
import reducers from './reducers/index'

const fullStore = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

export default fullStore