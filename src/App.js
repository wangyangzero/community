import React, { Component } from 'react';
import Routes from './routers';
import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes/>
            </div>
        );
    }
}

export default App;
