const reducer = [];

const reducers = (state = reducer,action) => {
    switch (action.type) {
        case "ADDITEM": return [
            ...State,actions.payload
        ]
            break;
        
        case "DELITEM":
             return state = state.filter((x) => { 
                return x.id !== action.payload.id});
             break;

             default: return state;
             break;

    }
}
export default reducers;