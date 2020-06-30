import React from 'react';
import ReactDOM from 'react-dom';
import { store , persistor} from "./store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </React.StrictMode>
        </Router>
    </Provider>,
  document.getElementById('root')
);


