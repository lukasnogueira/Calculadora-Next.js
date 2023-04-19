import { CalcContext } from "@/context/operations"
import { useContext } from "react"

export const useCalc = () => {


    return useContext(CalcContext)
}



export const useOperations = () => {
    const { soma, sub...} = useContext(CalcContext)

    return {}
}