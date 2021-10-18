const {createStore} = require('redux') ;
const initialState = {
	age :  10
}
const Reducer = (state = initialState , action)=>{
	let newState = {...state}
if (action.type === "ADD"){
	newState.age += 1
}
if (action.type=== "SUB"){
	newState.age = newState.age - action.payload
}
return newState
}


const store = createStore(Reducer);
store.subscribe(()=>{
	console.log("state : " , JSON.stringify(store.getState()) )
})
store.dispatch({type : "ADD"})
store.dispatch({type : "ADD"})
store.dispatch({type : "ADD"})
store.dispatch({type : "SUB", payload : 3})
