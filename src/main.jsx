import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header.jsx';
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header /><App/></>
  },
  {
    path: "/product/:productId",
    element: <><Header /><ProductDetail/></>
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
