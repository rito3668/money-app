import styles from './Signup.module.css'
import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
export default function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [display,setDisplay] = useState('')
    const {signup,error,pending} = useSignup()
    const handleSubmit=(e)=>{
        e.preventDefault()
        signup(email,password,display)
    }
  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
        <h2>Signup:</h2>
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
        <label>
            <span>display name:</span>
            <input 
                required
                type="text" 
                value={display}
                onChange={(e)=>setDisplay(e.target.value)}
            />
        </label>
        {!pending&&<button className='btn'>Signup</button>}
        {pending&&<button className='btn' disabled>loading...</button>}
        {error&&<p>{error}</p>}
    </form>
  )
}
