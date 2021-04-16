import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import TopBar from 'components/TopBar/TopBar'
import Routes from 'routes'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerReducer from 'redux/reducers/registerReducer'

const store = createStore(registerReducer)

const app = (
    <Provider store={store}>
        <Router>
            <TopBar />
            <Routes/>
        </Router>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));


