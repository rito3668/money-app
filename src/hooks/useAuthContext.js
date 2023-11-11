import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
export const useAuthContext =()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("this hook must be inside an authcontextprovider")
    }
    return context
}