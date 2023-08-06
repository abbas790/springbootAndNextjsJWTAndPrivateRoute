import React from 'react';
import logo from './logo.svg';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './template/pages/auth/login'; 
import { Provider } from 'react-redux' 
import { useAppDispatch, useAppSelector } from './config/store';
import { useEffect } from 'react';
import { getAccount } from './shared/reducers/authentication';
import AppRoutes from './route';
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
    <div className="App">
        <BrowserRouter>
         <AppRoutes/>
         </BrowserRouter>
    </div>
  );
}

export default App;
