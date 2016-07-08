import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import {incAsync, incAsyncOdd} from '../actions'

const mapStateToProps = state => {
  return {
    // TODO
    vrednost: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // TODO
    inkrementiraj: () => {dispatch({type: 'INCREMENT'})},
    dekrementiraj: () => {dispatch({type: 'DECREMENT'})},
    inkrementirajNeparan: () => {dispatch({type: 'INCREMENT_IF_ODD'})},
    inkrementirajAsinhrono: () => {dispatch(incAsync())},
    inkrementirajAsinhronoNeparan: () => {dispatch(incAsyncOdd())},
    dodajVrednost: (num) => {dispatch({type: 'ADD_VALUE', num})},
    oduzmiVrednost: (num) => {dispatch({type: 'SUB_VALUE', num})}
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Container
