import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";

import { editProduct } from "../../redux/actions";



const EditModal = ({el}) => {
  const [modal, setModal] = useState(false);
  const[Price,setPrice]=useState(el.price)
const[Description,setDescription]=useState(el.Description)
const [FoodName,setFoodName]=useState(el.FoodName)

const[image,setimage]=useState(el.image)
  const toggle = () => {
    setModal(!modal);

  };
  const dispatch = useDispatch();

  const editt=()=>{
    dispatch(editProduct(el._id,{Description,Price,image,FoodName}))
    setModal(!modal)
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        edit {" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="examplemarque">FoodName</Label>
              <Input
            value={FoodName}
            onChange={(e)=>setFoodName(e.target.value)}
                type="marque"
                name="marque"
                id="examplemarque"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Input
         value={Description}
         onChange={(e)=>setDescription(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Price</Label>
              <Input
              value={Price}
              onChange={(e)=>setPrice(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            
          
            
            
            <FormGroup>
              <Label for="examplePassword">image</Label>
              <Input
              value={image}
              onChange={(e)=>setimage(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default EditModal