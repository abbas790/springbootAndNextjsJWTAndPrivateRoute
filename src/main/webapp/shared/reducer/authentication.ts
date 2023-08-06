import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import axiosInterceptorInstance from '../../config/axiosInterceptorInstance ';


interface AuthParams{
    email:string,
    password:string
}

export let initialState={
    isAuthenticated: false,
    test:'',
    account:{} as any
}
export const login=createAsyncThunk(
    'authentication/login',
    async (auth:AuthParams) =>{
        return axios.post<any>('http://localhost:8080/api/auth/authenticate', auth)
    } 
  );
export const gedData=createAsyncThunk(
    'getData',
    async () =>{
        return axiosInterceptorInstance.get<any>('/api/home')
    } 
  );
export const getAccount=createAsyncThunk(
    "getAccount",
    async()=>{
       
    }
)
  
export const authenticationSlice=createSlice({
    name:'authentication',
    initialState:initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(login.fulfilled,(state,action)=>{
            sessionStorage.setItem('token',action.payload.data.token)
            return {
                ...state,
                isAuthenticated:true
            }
            
        })
        .addCase(getAccount.fulfilled,(state,action)=>{
              return {
                ...state,
                isAuthenticated:true
            }
        })
        .addCase(gedData.fulfilled,(state,action)=>{
            return {
                ...state,
                test:action.payload.data
            }
        })
    },
})

export default authenticationSlice.reducer