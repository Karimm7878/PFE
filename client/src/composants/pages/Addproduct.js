import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { getProduct } from "../../redux/actions";
import ProductList from "../ProductList";
import { addProduct } from "../../redux/actions";
import axios from "axios"
const Addproduct = () => {

const[Description,setDescription]=useState("")
const[FoodName,setFoodName]=useState("")
const[Price,setPrice]=useState("")
const[image,setImage]=useState("")

const [uploading, setUploading] = useState(false);
  const [cancel, setCancel] = useState(false);
 const dispatch=useDispatch()
 const navigate=useNavigate()

const add=()=>{
    dispatch(addProduct({Description,FoodName,Price,image}))
    setCancel(!cancel)
}
const uploadProfileImage = (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  setUploading(true);
  axios
    .post("/api/uploads", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      setImage(response.data);
      setUploading(false);
    })
    .catch((err) => {
      console.log(err);
      setUploading(false);
    });
};

  return (
    <>
 {cancel?(
navigate("/list")
 ):(
   
        <div style={{ margin: "100px" }}>
          <Form>
            <FormGroup>
              <Label for="exampleMarque">FoodName</Label>
              <Input
onChange={(event)=>(setFoodName(event.target.value))}
                type="text"
                name="Marque"
                id="exampleMarque"
                placeholder=""
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="examplePassword">price</Label>
              <Input
          onChange={(event)=>(setPrice(event.target.value))}
                type="text"
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Input
          onChange={(event)=>(setDescription(event.target.value))}
                type="text"
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            
            <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </FormGroup>
            <Button onClick={add}> + Food </Button>
            <Button onClick={() => setCancel(!cancel)}>cancel</Button>
          </Form>
        </div>
 )
}
    </>

  );
};

export default Addproduct;