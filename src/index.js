// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();
ReactDOM.render(
    <Root store={store}>
    </Root>,
    document.getElementById('root')
);



