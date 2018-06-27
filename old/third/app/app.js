/**
 * Created by easterCat on 2018/6/27.
 */
import './index.html';
import './styles/app.less';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
