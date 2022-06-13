import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HMSRoomProvider  } from '@100mslive/react-sdk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HMSRoomProvider>
    {/* <HMSThemeProvider appBuilder={{ theme: "dark" }}> */}
      <App />
    {/* </HMSThemeProvider> */}
  </HMSRoomProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
