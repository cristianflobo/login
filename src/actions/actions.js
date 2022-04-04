import axios from  'axios'

export const login1 = (e) => async (dispatch) => {
    try {    
        const respuesta = await axios.post(`http://localhost:3001/`,{usuario1:e.target[0].value,clave:e.target[1].value})
        console.log("res",respuesta.data)
        if (respuesta.data) {
            dispatch({
                type:"LOGIN",
                payload:respuesta.data,
                log:true
            })  
        }                      
    } catch (error){
        console.log(error)
    }    
}

export const crearUsuario = (e) => async (dispatch) => {
    //const respuesta = {}
    try {    
        const  respuesta = await axios.post(`http://localhost:3001/create`,{usuario1:e.target[0].value,clave:e.target[1].value,})
        if (respuesta.data) {
            console.log("res",respuesta.data)
        }
        
        // dispatch({
        //     type:"LOGIN",
        //     payload:info,
        // })                   
       
    } catch (error){
        console.log(error)
    }finally{
      //  console.log("res",respuesta)
    } 
}

