import '../css/SignIn.css'
import {FcGoogle} from 'react-icons/fc'
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import {auth,provider} from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../context/store'
import { stateType } from '../context/reducer'
import { useRef } from 'react'
const SignUp = () => {
  const navigate=useNavigate()
  const [{},dispatch]=useStore()
  const email=useRef()
  const password=useRef()
  const name=useRef()
  const emailLogin=async()=>{
    if(email.current.value!=='' && password.current.value!=='' && name.current.value!=='')
    {
      const {user}=await createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      dispatch({type:stateType.EUSER,user:user})
      localStorage.setItem('email-user',JSON.stringify(userData.user))
      email.current.value=''
      password.current.value=''
      name.current.value=''
      navigate('/')
    }
    else {
      alert("Please fill all the fields to create a user")
    }
  }

  const googleLogin=async()=>{
    const {user}=await signInWithPopup(auth,provider)
    dispatch({type:stateType.GUSER,user:user})
    localStorage.setItem('google-user',JSON.stringify(user))
    navigate('/')
  }
  return (
    <>
     <div className="sign-up">
      <div className="user-box">
        <input ref={name} type="text" placeholder='Enter Your name' />
        <input ref={email} type="email" placeholder='Enter Your email' />
        <input ref={password} type="password" placeholder='Enter Your password'/>
        <button className='em-sign' onClick={emailLogin}>Sign Up</button>
        <p>Or</p>
        <button className='google-auth' onClick={googleLogin}>
          <div><FcGoogle size={20}/></div>
          <div>Sign in with google</div>
        </button>
      </div>
     </div>
    </>
  )
}

export default SignUp