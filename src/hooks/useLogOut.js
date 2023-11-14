import { useState ,useEffect} from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
export const useLogOut =()=>{
    const [error,setError] = useState(null)
    const [pending,setPending] = useState(false)
    const [isCancelled,setIsCancelled] = useState(false)
    const {dispatch} = useAuthContext()
    const logout = async()=>{
        setError(null)
        setPending(true)
        //logout the user
        try{
            await projectAuth.signOut()
            //dispatch logout
            dispatch({type:'LOGOUT'})
            if(!isCancelled){
                setPending(false)
            setError(null)
            }
        }catch(err){
            if(!isCancelled){
                console.log(err.message)
            setPending(false)
            setError(err.message)
            }
        }
    }
    useEffect(()=>{
       return ()=> setIsCancelled(true)
    },[])
    return {error,pending,logout}
}