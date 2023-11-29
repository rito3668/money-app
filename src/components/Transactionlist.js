import React from 'react'
import styles from '../pages/home/Home.module.css'
import { useFirestore } from '../hooks/useFirestore'
export default function Transactionlist({transactions}) {
    const {delDocument,response} = useFirestore("transactions")
    console.log(response)
  return (
    <ul className={styles.transactions}>
        {transactions.map((transaction)=>(
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>${transaction.amount}</p>
                <button onClick={()=>delDocument(transaction.id)}>x</button>
            </li>
        ))}
    </ul>
  )
}
