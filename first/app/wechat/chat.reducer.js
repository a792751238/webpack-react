/**
 * Created by easterCat on 2017/8/8.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';
import {
    ISSUE_FETCHED,
    ISSUE_TYPE_FETCHED
} from './chat.actions';

const initState = fromJS({
    issue: null,
    issue_type: []
})

const handlers = {
    [ISSUE_FETCHED]: (chat, action) => {
        return chat.set('issue', fromJS(action.payload));
    },
    [ISSUE_TYPE_FETCHED]: (chat, action) => {
        console.log(fromJS(action.payload));
        return chat.set('issue_type', fromJS(action.payload));
    }
};

export default createReducer(initState, handlers);