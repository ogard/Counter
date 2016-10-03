import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import thunkMiddleware from 'redux-thunk'
import {incAsync, incAsyncOdd} from './components/actions'

const store = createStore(counter, applyMiddleware(thunkMiddleware))
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter 
      vrijednost={store.getState()}
      inkrementiraj={() => store.dispatch({type: 'INCREMENT'})}
      dekrementiraj={() => store.dispatch({type: 'DECREMENT'})}
      inkrementirajNeparan={() => store.dispatch({type: 'INCREMENT_IF_ODD'})}
      inkrementirajAsinhrono={() => store.dispatch(incAsync())}
      inkrementirajAsinhronoNeparan={() => store.dispatch(incAsyncOdd())}
      dodajVrednost = {(br) => store.dispatch({type:'ADD_VALUE', br})}
      oduzmiVrednost = {(br) => store.dispatch({type: 'SUB_VALUE', br})}
    />,
    rootEl
  )
}

render()
store.subscribe(render)
