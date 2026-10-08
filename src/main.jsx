import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './containers/login/index.jsx';
import GlobalStyle from './styles/GlobalStyles.js';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
    <ToastContainer autoClose={5000} theme="dark"/>

  </StrictMode>,
);
