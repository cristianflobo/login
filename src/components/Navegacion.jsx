import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Navegacion = () => {
    const dispatch = useDispatch();
    const prueba = useSelector(store => store.login)
    setTimeout(() => {
        console.log(prueba) 
    }, 1000);
    console.log(prueba)
   // if (prueba.name !== "") {
       if (localStorage.navegacion) {
           
       
        return (
            <div>
            
                
                    <span>{prueba.id}</span>
                    <span>hola</span>
                    <span>hola</span>
            <button
                type="submit"
                className="btn btn-primary mt-3 col-12"
                >
                Iniciar Secion
            </button>
            
            </div>
          )
   }
  
}

export default Navegacion