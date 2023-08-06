import { Password } from 'primereact/password';
import { useRef, useState } from 'react';
import { ErrorMessage, useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { useAppDispatch, useAppSelector } from '../../../../config/store';
import axios from 'axios';
import { login } from '../../../../shared/reducers/authentication';
import { Navigate } from 'react-router-dom';
const LoginPage=()=>{
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  console.log(isAuthenticated)
    if(isAuthenticated){
            <Navigate to="/"  />;
         }
  const dispatch= useAppDispatch();
    const formik = useFormik({
        initialValues: {
            password: '',
            email:''
        },
        validate: (data) => {
            let errors = {
                password: '',
                email:''
            }
            if (!data.email) {
                errors.email = 'Email is Required';
              
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
              ) {
                errors.email = 'Invalid [email] address';
               
              }
            if (!data.password) {
                errors.password = 'Password - Password is required.';
            }
         if(errors.email != '' || errors.password != ''){
            return errors;
         }
           
        },
        
        onSubmit: (data) => {
          const result=dispatch(login(data))
          
        }
    });
    
          
    const read=()=>{
      return (<Navigate to="/" />)
    }
    const isFormFieldInvalid = (name:string) =>{
       
       if(name=="email"){
        return !!(formik.touched['email'] && formik.errors["email"]);
       }if(name=="password"){
        return !!(formik.touched['password'] && formik.errors["password"]);
       }
    } 

    const getFormErrorMessage = (name: string) => {
        if(name=="email"){
            return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors["email"]}</small> : <small className="p-error">&nbsp;</small>;
        }if(name=="password"){
            return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors["password"]}</small> : <small className="p-error">&nbsp;</small>;
        }
       
    };
    return(
        <>
 <section className="text-center text-lg-start">
  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card cascading-right" style={{marginRight:'-50px',background:"hsla(0, 0%, 100%, 0.55)",backdropFilter:" blur(30px)"}}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Sign up now</h2>
            <div>
            <form onSubmit={formik.handleSubmit}>
             {getFormErrorMessage('email')}
                <span className="p-float-label card flex justify-content-center">
                    <InputText
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={(e) => {formik.setFieldValue('email', e.target.value);}}
                        className="card flex justify-content-center"
                    />
                    <label htmlFor="email">Email</label>
                </span>
                {getFormErrorMessage('password')}
                <span className="p-float-label  card flex justify-content-center">
                <Password inputId="password" className="card flex justify-content-center"  value={formik.values.password}  onChange={(e) => {formik.setFieldValue('password', e.target.value);}} />
                <label htmlFor="password">Password</label>
               </span>
               
                <Button type="submit"  style={{marginTop:"20px"}}  label="Submit"  />
               
            </form>
            <Button type="button" onClick={read}  style={{marginTop:"20px"}}  label="Submit"  />
        </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
 
</section>
        </>
    )
}

export default LoginPage