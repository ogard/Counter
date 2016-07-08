// TODO incrementAsync (i opcioni incrementAsyncIfOdd) action creator

const inc = () => {
    return {
        type: 'INCREMENT'
    };
}

const incOdd = () => {
    return {
        type: 'INCREMENT_IF_ODD'
    }
}

const incAsync = () => {
    return dispatch => {
        setTimeout(() => dispatch(inc()), 2000)
    }
}

const incAsyncOdd = () => {
    return dispatch => {
        setTimeout(() => dispatch(incOdd()), 2000)
    }
}

export {incAsync, incAsyncOdd}