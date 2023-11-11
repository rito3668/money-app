import { useState } from "react"
import { projectAuth } from "../firebase/config"
export const useSignup =()=>{
    const [error,setError] =useState(null)
    const [pending,setPending]=useState(false)
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
            setPending(false)
            setError(null)
        }catch(err){
            console.log(err.message)
            setError(err.message)
            setPending(false)
        }
    }


    return {error,pending,signup}
}