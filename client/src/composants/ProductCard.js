import { Card, Button, CardTitle, CardText } from "reactstrap";

import {useDispatch , useSelector} from "react-redux"
import EditModal from "../../src/composants/pages/EditModal" 
import '../App.css'
import { deletproduct } from "../redux/actions";


const ProductCard=({el})=>{
const dispatch=useDispatch()
console.log(el,"imeeeeen")
    const deletee=()=>{

dispatch(deletproduct(el._id))
    }
    const user=useSelector((state)=>state.authReducer.user)
    return(

        <div style={{ minWidth: "300px", margin: "10px" }}
        >
        <Card 
          body
          inverse
          style={{ backgroundColor: "#355", borderColor: "#500",  }}
        >

            <img  style={{width:"300px",height:"150px"}}src={el.image} alt="immg"/>
          <CardTitle tag="h5"> {el.FoodName} </CardTitle>
          <CardText>Description : {el.Description} </CardText>
          <CardText>Price : {el.Price} </CardText>
    


          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {user && user.isAdmin &&
            <>
                   <Button onClick={deletee}>delete</Button>
                   <Button >Order Now</Button>


       <EditModal el={el}/>
       </>
      }
          </div>
        </Card>
      </div>
    )
}
export default ProductCard