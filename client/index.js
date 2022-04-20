import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store';
import styles from "./styles.scss";


// render(<App />, document.getElementById('root'));

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
