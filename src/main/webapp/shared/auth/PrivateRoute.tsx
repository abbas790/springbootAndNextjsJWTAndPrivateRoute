
import React from 'react';
import { useAppSelector } from '../../config/store';
import { useRouter } from 'next/router';
import LoginPage from '../../pages/auth/login';
import { NextRequest } from 'next/server';
interface IOwnProps{
    children: React.ReactNode
  }
  
const PrivateRoute =({ children }:IOwnProps) =>{
    const isAuthenticated=useAppSelector(state=>state.authentication.isAuthenticated)
    const router =useRouter();
    if(isAuthenticated==false){
        return <LoginPage/>
    }else{
        if(router.pathname.includes('/auth/login')){
            router.push('/')
        }
        return <>{children}</>
    }
    

   
}

export default PrivateRoute