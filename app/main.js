import React from 'react';
import ReactDom from 'react-dom'
import App from './components/App.jsx';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDom.render(
    <BrowserRouter>
        <Route className="root" path="/" component={App}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);