import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputControl from '../InputControl/InputControl'
import { createUserWithEmailAndPassword , updateProfile} from '@firebase/auth';
import { auth } from '../../firebase';
function Signup() {

    const navigate=useNavigate();
    const [values, setValues]= useState({
        name:"",
        email:"",
        pass:""
    })

    const [errorMsg, setErrorMsg]=useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled]=useState(false);
    const handleSubmit=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        setsubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res)=>{
            setsubmitButtonDisabled(false)
            const user=res.user;
            await updateProfile(user, {
                displayName:values.name,
            })
      navigate('/')
            console.log(res)
        }).catch(err=>{
            setsubmitButtonDisabled(false)
            console.log("Error: ", err.message)})
    }

  return (
    <div>
       <div>
        <h1>Sign up</h1>
        <InputControl label='Name' placeholder="Enter your name" 
        onChange={event=>setValues(
            prev=>({...prev, name:event.target})
            )}>
            </InputControl>
        <InputControl label='Email' placeholder="Enter email address"
                onChange={event=>setValues(
                    prev=>({...prev, email:event.target})
                    )}>
        </InputControl>
        <InputControl label='Password' placeholder="Enter password"
                onChange={event=>setValues(
                    prev=>({...prev, pass:event.target})
                    )}>
                    </InputControl>

        <div>
      <div> <b>{errorMsg}</b></div>
            <button onClick={handleSubmit} disabled={submitButtonDisabled}>Signup</button>
            <p>Already have an account? <span><Link to='/login'>Login</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
