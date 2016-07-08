// TODO
import React from 'react'
const {Component, PropTypes} = React;

class Counter extends Component{
    render (){
        const {vrednost} = this.props;
        const {inkrementiraj, dekrementiraj, inkrementirajNeparan} = this.props;
        const {inkrementirajAsinhrono, inkrementirajAsinhronoNeparan} = this.props;
        const {dodajVrednost, oduzmiVrednost} = this.props;
        return (
            <div>
                <p>
                    {vrednost}
                    {' '}
                    <button onClick={inkrementiraj}>+</button>
                    {' '}
                    <button onClick={dekrementiraj}>-</button>
                    {' '}
                    <button onClick={inkrementirajNeparan}>+ ako je neparan</button>
                    {' '}
                    <button onClick={inkrementirajAsinhrono}>+ nakon 2 sekunde</button>
                    {' '}
                    <button onClick={inkrementirajAsinhronoNeparan}>+ nakon 2 sekunde ako je neparan</button>
                </p>
                <p>
                    <input ref={(ref) => this.val1 = ref}/>
                    {' '}
                    <button onClick={() => {dodajVrednost(this.val1.value); this.val1.value = ''}}>Add</button>
                </p>
                <p>
                    <input ref={(ref) => this.val2 = ref}/>
                    {' '}
                    <button onClick={() => {oduzmiVrednost(this.val2.value); this.val2.value = ''}}>Sub</button>
                </p>
            </div>
        );
    }
}

Counter.propTypes = {
    vrednost: PropTypes.number.isRequired,
    inkrementiraj: PropTypes.func.isRequired,
    dekrementiraj: PropTypes.func.isRequired,
    inkrementirajNeparan: PropTypes.func.isRequired,
    inkrementirajAsinhrono: PropTypes.func.isRequired,
    inkrementirajAsinhronoNeparan: PropTypes.func.isRequired,
    dodajVrednost: PropTypes.func.isRequired,
    oduzmiVrednost: PropTypes.func.isRequired
}


export default Counter