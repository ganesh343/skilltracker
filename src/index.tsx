import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes';
import store from './store';
import './index.css';
import LivecycleSDK from "@livecycle/sdk"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export function App() {
  useEffect(()=> {
    LivecycleSDK.init().catch(console.error)
  }, [])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRoutes} />
    </Provider>
  </React.StrictMode>
);

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
