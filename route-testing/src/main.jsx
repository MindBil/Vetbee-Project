import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// import React from 'react';

// import App from './App';
// import { createRoot } from 'react-dom/client';

// createRoot(
//   <React.StrictMode>
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );
