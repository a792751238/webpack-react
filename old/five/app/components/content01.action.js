/**
 * Created by easterCat on 2018/6/27.
 */
export const ADD_ONE_USER = 'ADD_ONE_USER';

export function addOneUser(value) {
    return dispatch => {
        return dispatch({
            type: 'ADD_ONE_USER',
            payload: value
        })
    }
}