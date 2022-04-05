import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { NewTaskContextProvider } from './store/NewTaskContext';

ReactDOM.render(
  <NewTaskContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </NewTaskContextProvider>,
  document.getElementById('root')
);
