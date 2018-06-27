/**
 * Created by easterCat on 2018/6/27.
 */
import './index.html';
import './styles/app.less';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
