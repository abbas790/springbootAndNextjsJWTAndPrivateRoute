/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { ErrorMessage, useFormik } from 'formik';
import { useAppDispatch,useAppSelector } from '../../../config/store';
import { login } from '../../../shared/reducer/authentication';
const LoginPage = () => {
    const [password, setPassword] = useState(''); 
    const [checked, setChecked] = useState(false);
    const router = useRouter();
    const {push}=useRouter();
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
          push("/")
          
        }
    });
    
    
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
    return (
        <div>
            <div className="flex flex-column align-items-center justify-content-center">   <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <div className="text-900 text-3xl font-medium mb-3">Welcome, to Expenditure System</div>
                            <span className="text-600 font-medium">Sign in to continue</span>
                        </div>

                        <div>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Email 
                                {getFormErrorMessage('email')}
                            </label>
                            <InputText id="email1" type="text" value={formik.values.email}  onChange={(e) => {formik.setFieldValue('email', e.target.value);}} placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />
                           
                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Password
                                {getFormErrorMessage('password')}
                            </label>
                            
                            <Password inputId="password1" 
                            value={formik.values.password}  onChange={(e) => {formik.setFieldValue('password', e.target.value);}}
                             placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                               
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Forgot password?
                                </a>
                            </div>
                            <Button type="submit" className="w-full p-3 text-xl"  label="Submit"  />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
        </React.Fragment>
    );
};
export default LoginPage;
