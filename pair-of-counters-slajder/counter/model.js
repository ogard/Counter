import t from 'tcomb';
import tf from 'tcomb-form';
import React, { createClass } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import { CAPTURE_SLIDER_STATE } from './actions'
import TagsComponent from './slider'

const Model = t.struct({
    count: t.Number,
    increment: t.Number,
    decrement: t.Number
});

const opcije = {
    fields: {
        count: {
            label: 'Vrednost brojača je: ',
            disabled: true
        },
        increment: {
            factory: TagsComponent
        },
        decrement: {
            label: 'Dekrementiraj za: '
        }
    }
}

export {Model, opcije};