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
        case 'IS_PENDING':
            return {pending:true,error:null,success:false,document:null}
        case 'ADDED_DOCUMENT':
            return {document:action.payload,pending:false,success:true,error:null}
        case 'ERROR':
            return {error:action.payload,pending:false,success:false,document:null}    
        default:
            return state
    }
}
export const useFirestore = (collection)=>{
    const [cancelled,setCancelled] = useState(false)
    const [response,dispatch] =useReducer(firestoreReducer,initialState)
    //getting a refernce to collection
    const ref = projectFirestore.collection(collection)
    //dispatching action only allowed
    const dispatchWhenCancelledIsFalse =(action)=>{
        if(!cancelled){
            dispatch(action)
        }
    }
    //adding document
    const addDocument = async(doc)=>{
        dispatch({type:'IS_PENDING'})
        try{
            const addedDocument = await ref.add(doc)
            dispatchWhenCancelledIsFalse({type:'ADDED_DOCUMENT',payload:addedDocument})
        }catch(err){
            dispatchWhenCancelledIsFalse({type:'ERROR',payload:err.message})
        }
    }
    //deleting document
    const delDocument =(id)=>{

    }

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])
    return {addDocument,delDocument,response}
}
