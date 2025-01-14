import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'remixicon/fonts/remixicon.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux-toolkit/store/store.js';

// --------------------pwa code-------------------------------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/talspo/sw.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
// -----------------------------------------------------------
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/talspo/' >
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
