import { useState } from 'react'
import styles from './Login.module.css'
import React from 'react'
import { useLogin } from '../../hooks/useLogin'
export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,pending} = useLogin()
    const handleSubmit=(e)=>{
        e.preventDefault()
        login(email,password)
    }
  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
            <span>email:</span>
            <input 
                required
                type="email" 
                value={email}
                onChange={(e=>setEmail(e.target.value))}
            />
        </label>
        <label>
            <span>password:</span>
            <input 
                required
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
        </label>
        {!pending&&<button className='btn'>Login</button>}
        {pending&&<button className='btn' disabled>loading...</button>}
        {error&&<p>{error}</p>}
    </form>
  )
}
