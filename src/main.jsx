import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './assets/styles/main.scss'
import { Router } from './app/routers/Router.jsx';
import MainRouter from './app/routers/MainRouter.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
