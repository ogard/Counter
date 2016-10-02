import React from 'react';
import SelectComponent from './select';
import DialogComponent from './dialog';

const options = [
   { id: 1, value: '123', label: 'Beograd - Stari Grad' },
   { id: 2, value: '128', label: 'Beograd - Novi Beograd' },
   { id: 3, value: '125', label: 'Beograd - Palilula' }
];

const label = "Izbor grada";

const poruka = "Pozdrav svima!"

class SelectWithDialog extends React.Component {
  constructor() {
    super();
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
  }

  handleDialogOpen() {
    alert(poruka);
    this.selectInput.focus();
  }

  render() {
    return (
      <div>
        <SelectComponent ref={node => this.selectInput = node} label={label} options={options} />
        <div style={{ position: 'relative', left: '170px', bottom: '20px' }}>
          <button onClick={this.handleDialogOpen}>Dijalog</button>
        </div>
      </div>
    );
  }
}

export default SelectWithDialog;