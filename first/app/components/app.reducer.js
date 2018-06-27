import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';
import {
    ADD_ITEMS
} from './app.actions';

const initState = fromJS({
    items: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }],
})

const handlers = {
    [ADD_ITEMS]: (app, action) => {
        action.payload.key = app.get('items').size + 1;
        return app.set('items', app.get('items').unshift(fromJS(action.payload)));
    }
};

export default createReducer(initState, handlers);