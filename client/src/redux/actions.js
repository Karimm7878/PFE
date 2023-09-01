import { GET_AUTH_USER, GET_PRODUCT, LOGIN_USER, LOGOUT_USER, REGISTER_USER,DELET_PRODUCT,EDIT_PRODUCT,ADD_PRODUCT,} from "./actionTypes"
import  axios from "axios"
export const registerUser=(newUser)=>async(dispatch)=>{
    try{
        const res=await axios.post("/userAuth/register",newUser)
        dispatch({
            type:REGISTER_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
export const loginUser=(formData)=>async(dispatch)=>{
    try{
        const res=await axios.post("/userAuth/login",formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}


export const getAuthUser=()=>async(dispatch)=>{
const  config={
    headers:{
        'authorization':localStorage.getItem("token")
    }
}
    try{
        const res=await axios.get("/userAuth/user",config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}

export const logout=()=>(dispatch)=>{
dispatch({
    type:LOGOUT_USER
})

}
export const getProduct = () => async (dispatch) => {
    const config={
        headers:{
            'authorization':localStorage.getItem("token")
        }
    }
    
        try {
          const res = await axios.get("/api/product/products");
          dispatch({
            type: GET_PRODUCT,
            payload: res.data,
          });
        } catch (error) {
          console.log(error);
        }
    }
    export const addProduct=(newCar)=>(dispatch)=>{
        const config={
            headers:{
                'authorization':localStorage.getItem("token")
            }
        }
        axios.post("/api/product/add",newCar,config)
        .then((res)=>dispatch(getProduct()))
        .catch((err)=>console.log(err))

    }
    export const deletproduct=(idProduct)=>(dispatch)=>{
        const  config={
            headers:{
                'authorization':localStorage.getItem("token")
            }
        }
        
        axios.delete(`/api/product/${idProduct}`,config)
        .then((res)=>dispatch(getProduct()))
        .catch((err)=>console.log(err))
        }
        export const editProduct=(idProduct,editedProduct)=>(dispatch)=>{
            const  config={
                headers:{
                    'authorization':localStorage.getItem("token")
                }
            }
            axios.put(`/api/product/edit/${idProduct}`,editedProduct,config)
            .then((res)=>dispatch(getProduct()))
            .catch((err)=>console.log(err))
        }
       
        
    