import React from 'react'
import { useReducer,useState,useEffect } from 'react'
import { projectFirestore, timeStamp } from '../firebase/config'
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
        case 'DELETED_DOCUMENT':
            return {error:null,pending:false,document:null,success:true}     
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
            const createdAt = timeStamp.fromDate(new Date())
            const addedDocument = await ref.add({...doc,createdAt})
            dispatchWhenCancelledIsFalse({type:'ADDED_DOCUMENT',payload:addedDocument})
        }catch(err){
            dispatchWhenCancelledIsFalse({type:'ERROR',payload:err.message})
        }
    }
    //deleting document
    const delDocument =async(id)=>{
        dispatch({type:'IS_PENDING'})
        try{
            await ref.doc(id).delete()
            dispatchWhenCancelledIsFalse({type:'DELETED_DOCUMENT'})
        }catch(err){
            dispatchWhenCancelledIsFalse({type:'ERROR',payload:'could not delete'})
        }
    }

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])
    return {addDocument,delDocument,response}
}
