import Constants from "../../common/Constants";

const initialState = {
    login: {
        userName: '',
        status: false
    }
}

/** Auth reducer to set authentication state */
const Reducer = (state = initialState, action) => {
    if (action.type === Constants.REDUX_TYPE.LOGIN_ACTION) {
        return { ...state, login: action.payload};
    } 
    return state;
}

/** Combine all available reducers in AuthReducer */
export default Reducer;
