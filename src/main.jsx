
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'remixicon/fonts/remixicon.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 

import store, { persistor } from './redux-toolkit/store/store.js'; 

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
);




// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import 'remixicon/fonts/remixicon.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import store, { persistor } from './redux-toolkit/store/store.js';

// // Google Translate Script Initialization
// const addGoogleTranslateScript = () => {
//   const script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//   script.async = true;
//   document.body.appendChild(script);

//   window.googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       { pageLanguage: 'en' },
//       'google_translate_element'
//     );
//   };
// };

// addGoogleTranslateScript();

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </PersistGate>
//   </Provider>
// );



