import { useContext } from "react"
import { RanchoContext } from "../context/RanchoContext"

const useRancho = ()=>{
    return useContext(RanchoContext)
}
export {useRancho}