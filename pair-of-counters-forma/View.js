import { connect } from 'react-redux';
import PairOfCounters from './pair-of-counters/View';
export default connect(state => {
    return {
        state
    };
})(PairOfCounters);