import { REMOVESQUARE } from "../constants/constants"
import { ADDSQUARE } from "../constants/constants"
import { DECREMENT, INCREMENT } from "../constants/constants"

export const incrementFunction=()=>{
    return{
        type: INCREMENT
    }
}
export const decrementFunction=()=>{
    return{
        type: DECREMENT
    }
}
export const addSquareFunction=()=>{
    return{
        type: ADDSQUARE
    }
}
export const removeSquareFunction=()=>{
    return{
        type: REMOVESQUARE
    }
}