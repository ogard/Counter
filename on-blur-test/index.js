import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-select/dist/react-select.css';
import Component from './components';

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(<Component />, rootEl);
}

render();
