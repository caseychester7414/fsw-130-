import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './styles.css';
import { CapContextProvider } from './capContext';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDom.render(
<Router>
  <React.StrictMode>
  <CapContextProvider>
    <App />
  </CapContextProvider>
  </React.StrictMode>
</Router>,
     document.getElementById('root'))