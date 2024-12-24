// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import './index.css';
import App from './App.jsx';
import store from './redux/store.js'; // Import the store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap with Provider */}
      <App />
    </Provider>
  </StrictMode>,
);
