import t from 'tcomb';
import tf from 'tcomb-form';
import React, { createClass } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import { CAPTURE_SLIDER_STATE } from './actions'



const inkrementor = (locals) => {
    return (
        <div>
            <MuiThemeProvider>
                <Slider min={-10} max={10} step={1} defaultValue={0}/>
            </MuiThemeProvider>
        </div>
    );
}

const InkrementorComponent = React.createClass({
    // getInitialState () {
    //     return {
    //         value: 0
    //     };
    // },
    // onChange1 (value) {
    //     this.setState({value});
    //     this.onChange2();
    // },
    // onChange2 (value) {
    //     (value) => dispatch({type: CAPTURE_SLIDER_STATE, payload: value});
    // },
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Slider
                     min={-10}
                     max={10} 
                     step={1} 
                     defaultValue={0}
                     value={this.state} 
                     onChange={(value) => context.dispatch({type: CAPTURE_SLIDER_STATE, payload: value})}
                     />
                </MuiThemeProvider>
            </div>
            );
    }
})

const Model = t.struct({
    count: t.Number,
    increment: t.Number,
    decrement: t.Number
});

let opcije = {
    fields: {
        count: {
            label: 'Vrednost brojača je: ',
            disabled: true
        },
        increment: {
            factory: InkrementorComponent
        },
        decrement: {
            label: 'Dekrementiraj za: '
        }
    }
}

export {Model, opcije};