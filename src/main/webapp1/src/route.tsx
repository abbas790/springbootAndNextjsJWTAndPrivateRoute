import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './template/pages/auth/login';
import PrivateRoute  from './shared/auth/PrivateRoute';
import HomePage from './template/layout/home';
const AppRoutes =()=>{

    return(
        <>
        <Routes>
            <Route path='/' element={ 
            <PrivateRoute>
            <HomePage/>
          </PrivateRoute>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
        </>
        
       
    )
    
}

export default AppRoutes;