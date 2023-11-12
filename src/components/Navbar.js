import styles from './Navbar.module.css'
import React from 'react'
import {Link} from 'react-router-dom'
import {useLogOut} from '../hooks/useLogOut'
export default function Navbar() {
    const {logout} = useLogOut()
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoney</li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li>
                <button className="btn" onClick={logout}>Logout</button>
            </li>
        </ul>
    </nav>
  )
}
