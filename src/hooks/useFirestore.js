import React from 'react'
import { useReducer,useState,useEffect } from 'react'
import { projectFirestore } from '../firebase/config'
let initialState = {
    document:null,
    pending:false,
    error:null,
    success:null
}
const firestoreReducer =(state,action)=>{
    switch(action.type){
        default:
            return state
    }
}
export const useFirestore = (collection)=>{
    const [cancelled,setCancelled] = useState(false)
    const [response,dispatch] =useReducer(firestoreReducer,initialState)
    //getting a refernce to collection
    const ref = projectFirestore.collection(collection)
    //adding document
    const addDocument = ()=>{
        
    }
    //deleting document
    const delDocument =()=>{

    }

    useEffect(()=>{
        return setCancelled(true)
    },[])
    return {addDocument,delDocument,response}
}
