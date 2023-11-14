import { useState ,useEffect} from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
export const useLogin =()=>{
    const [error,setError] = useState(null)
    const [pending,setPending] = useState(false)
    const [isCancelled,setIsCancelled] = useState(false)
    const {dispatch} = useAuthContext()
    const login = async(email,password)=>{
        setError(null)
        setPending(true)
        //logout the user
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email,password)
            //dispatch logout
            dispatch({type:'LOGIN',payload:res.user})
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
    return {error,pending,login}
}