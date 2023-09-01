import { GET_PRODUCT } from "../../redux/actionTypes"

const initState={
    product:null
}

export const ProductReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_PRODUCT:
            return{

            ...state,
            product:action.payload.product
        }
        default:
            return state
    }
}