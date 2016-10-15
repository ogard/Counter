import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import OpenAdvancedFilterIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ResetFilterIcon from 'material-ui/svg-icons/navigation/cancel';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = {
  filterContainer: {
    borderColor: '#ccc',
    border: '1px solid #ccc',
    height: '34px',
    width: '100%',
    borderRadius: '4px',
    padding: '3px 68px 3px 6px',
    backgroundColor: '#eee',
    display: 'flex',
    position: 'relative',
  },
  childContainer: {
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
  },
  smallIcon1: {
    width: 28,
    height: 28,
  },
  iconPosition1: {
    width: 34,
    height: 34,
    padding: 3,
    position: 'absolute',
    right: '34px',
    top: '0px'
  },
  smallIcon2: {
    width: 18,
    height: 18,
  },
  iconPosition2: {
    width: 34,
    height: 34,
    padding: 3,
    position: 'absolute',
    right: '0px',
    top: '0px'
  },
};

export class Filter1 extends React.Component {

	constructor() {
		super();
		this.state = { hasScrollbars: false };
	}

	render() {
		const { hasScrollbars } = this.state;
		return (
      <div>
        <label>Filter1</label>
        <div
          style={hasScrollbars ? { ...styles.filterContainer, height: '45px'} : styles.filterContainer }
        >
          <Scrollbars
            onUpdate={values => {
              if(values.clientWidth !== values.scrollWidth) {
                this.setState({ hasScrollbar: true });
              }
              this.setState({ hasScrollbar: false });
            }}
          >
            <span style={{ float: 'left', whiteSpace: 'nowrap' }}>
              шифра: <input />, назив: <input />, сектор-подсектор: абц, стање: активан
            </span>
          </Scrollbars>
          <MuiThemeProvider>
            <div>
              <IconButton iconStyle={styles.smallIcon1} style={styles.iconPosition1} >
                <OpenAdvancedFilterIcon />
              </IconButton>
              <IconButton iconStyle={styles.smallIcon2} style={styles.iconPosition2}>
                <ResetFilterIcon />
              </IconButton>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
		);
	}
};