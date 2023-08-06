import { Navigate, Outlet,useLocation} from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../../config/store';
interface IOwnProps{
    children: React.ReactNode
  }
  
const PrivateRoute =({ children }:IOwnProps) =>{
    const location = useLocation();
    const isAuthenticated=useAppSelector(state=>state.authentication.isAuthenticated)
    if(!isAuthenticated){
        return (
            <Navigate
              to={{
                pathname: '/login',
                search: location.search,
              }}
              replace
              state={{ from: location }}
            />
          );
    }
    return <>{children}</>

   
}

export default PrivateRoute