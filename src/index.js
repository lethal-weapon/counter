import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {CounterReducer} from './store/reducers/CounterReducer';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const dataStore = createStore(CounterReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
