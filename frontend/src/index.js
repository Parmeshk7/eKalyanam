import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from './context/StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StoreProvider>
      <App />
    </StoreProvider>
);


reportWebVitals();