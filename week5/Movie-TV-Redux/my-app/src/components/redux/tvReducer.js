const initState = []
 const tvReducer = (state = initState, action) =>{
     switch(action.type){
         case 'ADD_SHOW':
             return [...state, {...action.payload}]
    default: 
     return state
 }
}
 export default tvReducer