const redux = require('redux')
const createStore = redux.createStore //returns func which allows to create a global store

console.log(createStore)

const initialState = {
    count: 0,
    isAuthenticated: false
}

// this is a global state
const reducer = (state = initialState, action) => {

    if(action.type == 'INCREMENT_COUNTER') {
        return {
            ...state,
            count: state.count + 1
        }
    }

    else if(action.type == 'ADD_100') {
        return {
            ...state,
            count: state.count + action.value
        }
    }

    return state //returns updated global state
}

const store = createStore(reducer) //create a store

console.log(store.getState())

store.dispatch({type: 'INCREMENT_COUNTER'})
console.log(store.getState())

//add 100 to counter
store.dispatch({type: 'ADD_100', value: 100})
console.log(store.getState())

