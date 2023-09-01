import {useEffect}  from "react"
import {useDispatch,useSelector} from "react-redux"
import {getProduct} from "../../src/redux/actions"
import ProductCard from "../composants/ProductCard"
const ProductList=()=>{
    const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getProduct())
  },[])

const products=useSelector((state)=>(state.ProductReducer.product))
console.log(products,"testttt")
    return(
        <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" , justifyContent:"center"}}>
{
  products && products.map((el)=>(
    <ProductCard el={el}/>
  ))
}
        </div>
    )
}
export default ProductList