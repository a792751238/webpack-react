/**
 * Created by easterCat on 2018/6/27.
 */
import './index.html';
import './styles/app.less';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

ReactDom.render(<App/>, document.querySelector('#root'));