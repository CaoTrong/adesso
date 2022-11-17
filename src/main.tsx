import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from "axios";
import AuthService from "./services/AuthService";
import {BrowserRouter} from "react-router-dom";

// const axiosAgent = new https.Agent({
//
// })
axios.defaults.withCredentials = true;
AuthService.getCsrf();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)
