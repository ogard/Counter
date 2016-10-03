const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ADD_VALUE':
            return state + parseInt(action.br);
        case 'SUB_VALUE':
            return state - parseInt(action.br);
        case 'INCREMENT_IF_ODD':
            if (state % 2 !== 0){
                return state + 1;
            }
        default:
            return state;
    }
}

export default counter