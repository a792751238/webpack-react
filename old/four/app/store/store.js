/**
 * Created by easterCat on 2018/6/27.
 */
import {createStore} from 'redux';
import user from '../components/content01.reducer';

const store = createStore(user);

export default store;