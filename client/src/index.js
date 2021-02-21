import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import thunk from 'redux-thunk';
import {BrowserRouter as Router}  from 'react-router-dom'

const store = createStore(rootReducer,applyMiddleware(thunk));

const renderReactDom = () =>{
    ReactDOM.render(
        <Provider  store={store}>
            <Router>
                <App />
            </Router>
        </Provider>, document.getElementById('root')
    );
}

if (window.cordova) {
    document.addEventListener('deviceready', () => {
      renderReactDom();
    }, false);
} else {
  renderReactDom();
}
