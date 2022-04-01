
const initialState = {
    count: [],
    name: "",
    password: "",
  }
  const LOGIN = "LOGIN"
  
  export default (state = initialState, action) => {
    console.log("first",action.payload)
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          count: action.payload,
        }
    
      default:
        return {...state}
    }
  }
  