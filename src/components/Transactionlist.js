import React from 'react'
import styles from '../pages/home/Home.module.css'
export default function Transactionlist({transactions}) {
  return (
    <ul className={styles.transactions}>
        {transactions.map((transaction)=>(
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>${transaction.amount}</p>
            </li>
        ))}
    </ul>
  )
}
