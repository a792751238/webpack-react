import React from 'react';
import Header from './Header';
import Body from './Body';

class App extends React.Component {
    constructor() {
        super();

        console.dir(Promise);
    }
    render() {
        return (
            <div>Hello World!123123
                <Header/>
                <Body/>
            </div>
        )
    }
}
export default App;