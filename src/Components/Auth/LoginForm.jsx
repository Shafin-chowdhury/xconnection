/* eslint-disable no-undef */
/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import Field from '../Common/Field'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  const submitForm = (formData) =>{
     console.log(formData);
  navigate("/")
  }
  return (
    <form className='pb-2 lg:pb-4' onSubmit={handleSubmit(submitForm)}> 
      <Field label="Email" error = {errors.password}>
        <input {...register("email", {required: "Email id is required"})} className={`auth-input text-sm py-2 ${!!errors.email ? "border-red-500" : "border-[#CCCCCC]/[14%]"}`} type='email' id='email' />
      </Field>
      <Field label="Password" error = {errors.password}>
        <input {...register("password", {required: "Password is required",
            minLength: {
                value: 8,
                message: "Your password must be at 8 character"
            }
        })} className={`auth-input text-sm py-2 ${!!errors.password ? "border-red-500" : "border-[#CCCCCC]/[14%]"}`} type='password' id='password' />
      </Field>
      <Field>
        <button className='auth-input bg-lwsGreen font-bold text-deepdark transition-all hover:opacity-90'>
            Login
        </button>
      </Field>
    </form>
  )
}

export default LoginForm