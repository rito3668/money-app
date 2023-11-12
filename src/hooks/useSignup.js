import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
export const useSignup =()=>{
    const [isCancelled,setIsCancelled] = useState(false)
    const [error,setError] =useState(null)
    const [pending,setPending]=useState(false)
    const {dispatch} =useAuthContext()
    const signup = async(email,password,displayName)=>{
        setError(null)
        setPending(true)
        try{
            //signing up the user
           const res = await projectAuth.createUserWithEmailAndPassword(email,password)
            if(!res){
                throw new Error('Could not complete signup')
            }
            //add display name to user 
            await res.user.updateProfile({displayName})
            //dispatch login action
            dispatch({type:'LOGIN',payload:res.user})
            if(!isCancelled){
                setPending(false)
                 setError(null)
            }
            
        }catch(err){  
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setPending(false)
            }
        }
    }
    useEffect(()=>{
        setIsCancelled(true)
    })
    return {error,pending,signup}
}