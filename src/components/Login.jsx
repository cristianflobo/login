import React from 'react'


const Login = () => {
  return (
    <div  style={{ display:"flex", justifyContent:"center", paddingTop:"15%"}} >
        <form className="container col-2">
            <label className="sr-only" for="inlineFormInputName2">Nombre</label>
            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Nombre"/>
            <label className="sr-only" for="inlineFormInputGroupUsername2">Password</label>
            <div classNameName="input-group mb-2 mr-sm-2">     
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Password"/>
            </div> 
            <button type="submit" className="btn btn-primary mt-3 col-5">Submit</button>
            <button type="submit" className="btn btn-primary mt-3 col-5">Submit</button>
        </form>
        
       
    </div>
  )
}

export default Login