import React, {useState} from 'react';
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import './login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/shop')
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider)
        navigate('/shop')

      } catch (error) {
        console.error(error)
      }
  }

  return (
    <>
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Yummy Corner</h1>
        <p>"Your favorite food at your door steps"</p>
      </div>
    </div>
    <br/>

    <div className='login'>
        
        <label > Email : </label>
        <input type= 'text' onChange={(e) => setEmail(e.target.value)} />
        <label > Password : </label>
        <input type= 'password' onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <br/>

        <button type='submit' onClick={signIn}>Submit</button>

        <br/>
    <p>OR</p>
    <button type='submit' onClick={signInWithGoogle}>Sign In with google</button>
    </div>
    </>
  )
}
