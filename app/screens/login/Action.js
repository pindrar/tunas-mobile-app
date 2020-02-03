import Constants from "../../common/Constants";

export const updateLoginAction = loginResponse => ({
    type: Constants.REDUX_TYPE.LOGIN_ACTION,
    payload: loginResponse
});

export function fetchLogin(params) {
    const paramsObj = {
        username: params.username,
        status: true
    }
    return dispatch => {
        dispatch(updateLoginAction(paramsObj));
    };    
}