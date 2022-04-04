
const initialState = {
    id: "",
    name: "",
    password: "",
    log:false
  }
  const LOGIN = "LOGIN" 
  export default (state = initialState, action) => {
    
    switch (action.type) {
      case LOGIN: 
        return {
          ...state,
          id: action.payload.id,
          name:action.payload.usuario1,
          password:action.payload.clave,
          log:action.log
        }
    
      default:
        return {...state}
    }
  }
  