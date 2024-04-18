import { ADDSQUARE, REMOVESQUARE } from "../constants/constants"

export const squareReducer=(state,action)=>{
    let stateCopy = [...state]
    switch(action.type){
        case ADDSQUARE:
            stateCopy.push("square")
            break
        case REMOVESQUARE:
            stateCopy.pop()
            break
        default:
            break
    }
    return stateCopy
}