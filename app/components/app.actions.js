/**
 * Created by easterCat on 2017/7/24.
 */

export const ADD_ITEMS = 'ADD_ITEMS';

export function addItems(value) {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEMS,
            payload: value
        });
    };
}