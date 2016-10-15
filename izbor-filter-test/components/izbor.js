import 'font-awesome-webpack';
import React from 'react';
import './app.css';
import './scrollbarsStyle.css';

const iconStyle = {
  position: 'absolute',
  zIndex: '1',
  right: '20px',
  top: '1px'
}

const inputStyle = {
  width: '100px',
  paddingRight: '20px'
}

const iconStyleNew = {
  position: 'absolute',
  right: '1px',
  top: '10px'
};

const inputStyleSifra = {
  width: '100px',
  marginLeft: '2px',
  // boxShadow: '0 0 6px rgba(0,0,0,0.3)'
  // boxShadow: '0 1px 1px rgba(0, 0, 0, .075)'
  // WebkitTransition: {
  //   boxShadow: '0 0 6px rgba(0.7,0,0,0)'
  // },
  // transition: {
  //   boxShadow: '0 0 6px rgba(0.7,0,0,0)'
  // }
  // transition: {
  //   boxShadow: '0 1px 1px rgba(0.5, 0, 0, .075)'
  // }
  // boxShadow: '0 1px 1px rgba(0, 255, 0, 0.7)',
  // WebkitBoxShadow: 'inset 0 1px 1px rgba(0.5, 0, 0, .075)'
  boxShadow: 'inset 0 1px 1px rgba(0, 255, 0, .075)'
};

const inputStyleNaziv = {
  width: '100%',
  marginLeft: '5px'
};

const booleanValue = true;

export const Izbor = () => (
  <div>
    <label>Шифра</label>
    <div style={{ display: 'flex' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Unesite tekst"
          className="form-control"
          style={booleanValue ? { ...inputStyleSifra, paddingRight: '20px'} : inputStyleSifra}
          onKeyDown={(event) => { if (event.keyCode === 13) { alert('Proba'); } }}
        />
        {booleanValue && <i style={iconStyleNew} className="fa fa-spinner fa-spin fa-fw"></i>}
      </div>
      <input value={'proba'} readOnly tabIndex='-1' className='form-control' style={inputStyleNaziv}/>
    </div>
  </div>
);