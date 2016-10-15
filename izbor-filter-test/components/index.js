import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Izbor } from './izbor.js';
import { Filter1 } from './filter1.js';
import { Filter2 } from './filter2.js';

// f-ja za provjeru trenutne sirine dom-a
const getWidth = () => {
  if (self.innerHeight) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

const component = () => (
	<div>
    <br />
    <Izbor/>
    <br />
    <Filter1 />
    <br/>
    <Filter2 />
	</div>
);

export default component