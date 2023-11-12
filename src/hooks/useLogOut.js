import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
const useLogOut =()=>{
    const [error,setError] = useState(null)
    const [pending,setPending] = useState(false)
    const {dispatch} = useAuthContext()
    const logout = async()=>{
        setError(null)
        setPending(true)
        //logout the user
        try{
            await projectAuth.signOut()
            //dispatch logout
            dispatch({type:'LOGOUT'})
            setPending(false)
            setError(null)
        }catch(err){
            console.log(err.message)
            setPending(false)
            setError(err.message)
        }
    }
    return {error,pending,logout}
}