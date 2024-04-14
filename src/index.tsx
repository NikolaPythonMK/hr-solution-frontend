import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import PermanentDrawerLeft from './components/PernamentDrawerLeft';
import Dashboard from './components/Dashboard/Dashboard';
import NotFoundPage from './pages/NotFoundPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <PermanentDrawerLeft />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: '',
        element: <Dashboard />
      },
    ]  
  },
])


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
