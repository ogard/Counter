import tf from 'tcomb-form';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import { CAPTURE_SLIDER_STATE, actionTypes } from './actions';

class TagsComponent extends tf.form.Component {
    getTemplate() {
        return (locals) => {
            return (
                <div>
                    {SliderFunction(locals.value, locals.context)}
                </div>
            );
        }
    }
}

const SliderFunction = (val, dispatch) => {
    return (
        <MuiThemeProvider>
            <Slider
              min={-10}
              max={10}
              step={1}
              defaultValue={0}
              value={val}
              onChange={(_, value) => dispatch({type: CAPTURE_SLIDER_STATE, payload: value})}
            />
        </MuiThemeProvider>
    );

}

export default TagsComponent

