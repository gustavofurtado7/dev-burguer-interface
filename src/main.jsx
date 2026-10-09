import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles.js';
import { ToastContainer } from 'react-toastify';
import {routes} from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <GlobalStyle />
    <ToastContainer autoClose={2000} theme="dark"/>

  </StrictMode>,
);
