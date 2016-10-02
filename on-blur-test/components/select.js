import React from 'react';
// import Select from 'react-select';

// const selectComponent = (props) => {
//    const { label, options } = props;
//    return (
//       <div>
//          {label}
//          <Select
//             options={options}
//             placeHolder="Unesite sifru"
//             // onChange={logChange}
//             valueRenderer={option => `[${option.value}] ${option.label}`}
//             noResultsText="Ne postoji vrednost za zadati kriterijum pretrage"
//          />
//       </div>
//    );
// }

class SelectComponent extends React.Component {
  focus() {
    this.inputField.focus();
  }
  render() {
    const { label, options } = this.props;
    return (
      <div>
        {label}
        <br />
        <select ref={node => this.inputField = node}>
          {options.map(element => <option key={element.id} value={element.value}>{element.label}</option>)}
        </select>
      </div>
    );
  }
};

export default SelectComponent;