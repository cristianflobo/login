import axios from  'axios'

export const login1 = (e) => async (dispatch) => {
    console.log("LOGIN")
    try {    
        const respuesta = await axios.post(`http://localhost:3001/`,{usuario1:e.target[0].value,clave:e.target[1].value})
        console.log("res",respuesta.data)
        if (respuesta.data) {
            localStorage.setItem('navegacion', 'true');
            dispatch({
                type:"LOGIN",
                payload:respuesta.data,
                log:localStorage.navegacion
            })  
        }                      
    } catch (error){
        console.log(error)
    }    
}

export const crearUsuario = (e) => async (dispatch) => {
    console.log("CREAR")
    try {    
        const  respuesta = await axios.post(`http://localhost:3001/create`,{usuario1:e.target[0].value,clave:e.target[1].value,})
        if (respuesta.data) {
            console.log("res",respuesta.data)
        }              
       
    } catch (error){
        console.log(error)
    }finally{
      //  console.log("res",respuesta)
    } 
}

export const logout =() => (dispatch) =>{
    console.log("LOGOUT")
    const value = false
    localStorage.setItem('navegacion', 'false')
    dispatch({
        type:"LOGOUT",
        log:value
    })
}
