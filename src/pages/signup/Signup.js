import styles from './Signup.module.css'
import React from 'react'
import { useState } from 'react'
export default function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [display,setDisplay] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email,password,display)
    }
  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
        <h2>Signup:</h2>
        <label>
            <span>email:</span>
            <input 
                type="email" 
                value={email}
                onChange={(e=>setEmail(e.target.value))}
            />
        </label>
        <label>
            <span>password:</span>
            <input 
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
        </label>
        <label>
            <span>display name:</span>
            <input 
                type="text" 
                value={display}
                onChange={(e)=>setDisplay(e.target.value)}
            />
        </label>
        <button className='btn'>Signup</button>
    </form>
  )
}
