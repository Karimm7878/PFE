import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getAuthUser } from './redux/actions';
import './App.css';
import Dashboard from "./composants/pages/Dashboard"
import Home from "./composants/pages/Home"
import {Routes ,Route} from "react-router-dom"
import AppNavBar from "./composants/AppNavBar"
import Addproduct from './composants/pages/Addproduct';
import ProductList from "./composants/ProductList"
function App() {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAuthUser())
},[])
  return (
    <div className="App">
      <AppNavBar />
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/dashboard" element={<Dashboard />} />
   <Route path="/add" element ={<Addproduct/>} />
   <Route path="/list" element ={<ProductList/>} />
  </Routes>
    </div>
  );
}

export default App;