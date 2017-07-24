import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './components/App.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route className="root" path="/" component={App}/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);