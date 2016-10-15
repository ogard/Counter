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
    // height: '34px',
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

class CustomScrollBar extends React.Component {

	constructor() {
		super();
		this.handleScrollUpdate = this.handleScrollUpdate.bind(this);
	}
  handleScrollUpdate(value) {
		const { updateDivHeight } = this.props;
    updateDivHeight(value);
  }
  render() {
		const { children } = this.props;
    return (
      <Scrollbars
        // renderTrackHorizontal={({ style, ...props }) => <div {...props} style={{ ...style, right: 2, bottom: 2, left: 2, borderRadius: 3, backgroundColor: 'rgba(0,0,0,.1)' }} />}
        // renderThumbHorizontal={({ style, ...props }) => <div {...props} style={{ ...style, cursor: 'pointer',borderRadius: 'inherit', backgroundColor: 'rgba(0,0,0,.1)' }} />}
        onUpdate={this.handleScrollUpdate}
        >
        {children}
      </ Scrollbars>
    );
  }
}

export class Filter2 extends React.Component {

	constructor() {
		super();
		this.handleUpdateDivHeight = this.handleUpdateDivHeight.bind(this);
	}

	handleUpdateDivHeight(obj) {
    if (obj.clientWidth !== obj.scrollWidth) {
      this.filterDiv.style.height = '45px';
    }
    else {
      this.filterDiv.style.height = '34px';
    }
  }

	render() {
		return (
      <div>
        <label>Filter2</label>
        <div
					ref={node => this.filterDiv = node}
					style={styles.filterContainer}
        >
          <CustomScrollBar updateDivHeight={this.handleUpdateDivHeight}>
            <span style={{ float: 'left', whiteSpace: 'nowrap' }}>
              шифра: <input />, назив: <input />, сектор-подсектор: абц, стање: активан
            </span>
          </CustomScrollBar>
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