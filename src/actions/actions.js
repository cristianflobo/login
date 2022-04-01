import axios from  'axios'

export const login1 = (e) => async (dispatch) => {
    console.log("ee",e.target[0].value)
    console.log("ee",e.target[1].value)
    const info1 = []
    try {   
        for (let i = 1; i < 21; i++) {
            const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            info1.push(respuesta.data)
        }
        dispatch({
            type:"LOGIN",
            payload:info1,
        })                   
       
    } catch (error){
        console.log(error)
    } 
    

}

