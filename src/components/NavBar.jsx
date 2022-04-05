import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/actions';
import Login from './Login';

const NavBar = (props) => {
  const dispatch = useDispatch();
  const logg = useSelector(store => store.login.log)
  const log = localStorage.navegacion
console.log(props.set[1])

  const buttonLogOut = ()=>{
      dispatch(logout()) 
      props.set[1]({
        user: "",
        password: "",
      })
  }
  
 if (log == "true") {
    return (
      <div   >       
      <nav style={{backgroundColor:'burlywood',padding:15, }}>   
          <div style={{display:"flex" ,justifyContent:"space-between"}}>
            <a class="navbar-brand" style={{justifyContent:"flex-end"}}>NOMBRE</a>
            <button onClick={()=>(buttonLogOut())} className="btn btn-outline-success " style={{display:"flex" ,justifyContent:"center"}} type="submit">Cerrar secion</button>
          </div>
      </nav>
      </div>
    )  
 }else{
    return <div ><Login/></div>
 }
  
}

export default NavBar
