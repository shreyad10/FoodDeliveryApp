import React from 'react';
import './login.css'

export const Login = () => {
  return (
    <>
    <br/>  <br/>
    <div className='login'>
        
        <label > Email : </label>
        <input type= 'text' />
        <label > Password : </label>
        <input type= 'password' />
        <br/>
        <br/>

        <button type='submit'>Submit</button>

        <br/>
    <p>OR</p>
    <button type='submit'>Sign In with google</button>
    </div>
    </>
  )
}
