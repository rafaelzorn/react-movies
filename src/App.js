import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Redux from './configuration/Redux';
import Main from './Main';

export default class App extends Component {
    render() {
        return (
            <Provider store={Redux.createStore()}>
                <Main />
            </Provider>
        );
    }
}
