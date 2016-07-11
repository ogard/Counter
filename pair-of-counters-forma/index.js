import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Root from './View';
import configureStore from './configureStore';

const store = configureStore();
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    rootEl
  )
}

render()
