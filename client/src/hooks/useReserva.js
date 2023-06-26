import { useContext } from "react"
import { ReservaContext } from "../context/ReservasContext"

const useReserva = ()=> {
    return useContext(ReservaContext)
}

export {useReserva}