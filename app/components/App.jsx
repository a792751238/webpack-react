/**
 * Created by easterCat on 2018/6/27.
 */
import React from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';

export default function App() {
    return (
        <div className="app">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    )
}