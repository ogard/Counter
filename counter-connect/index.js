import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import Counter from './containers'
import counter from './reducers'
import thunkMiddleware from 'redux-thunk'

const store = createStore(counter, applyMiddleware(thunkMiddleware))
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    rootEl
  )
}

render()
store.subscribe(render)
