import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './containers/login/index.jsx';
import GlobalStyle from './styles/GlobalStyles.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
  </StrictMode>,
);
