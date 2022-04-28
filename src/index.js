import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { personSlice } from "./store/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // counter: counterSlice.reducer,
        person: personSlice.reducer
    }
});

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
