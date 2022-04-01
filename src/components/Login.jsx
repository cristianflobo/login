import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login1 } from "../actions/actions";

const Login = () => {

  const dispatch = useDispatch();
  const [form1, setform1] = useState({
    user: "",
    password: "",
  });
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(login1(e))
  };
  const handleChange = (e) => { 
    setform1({
      ...form1,
      [e.target.name]: e.target.value,
    });
  };
  const create = ()=>{
    window.location.href='/create'
  }
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "15%" }}
    >
      <form
        className="container col-2"
        onSubmit={handleSumit}
      >
        <label className="sr-only" for="inlineFormInputName2">
          Nombre
        </label>
        <input
          name="user"
          onChange={(e)=>handleChange(e)}
          value={form1.user}
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Nombre"
        />
        <label className="sr-only" for="inlineFormInputGroupUsername2">
          Password
        </label>
        <div className="input-group mb-2 mr-sm-2">
          <input
            type="password"
            name="password"
            onChange={(e)=>handleChange(e)}
            value={form1.password}
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Password"
          />
        </div>
        <button
          //onClick={(e) => dispatch(login1(e))}
          style={{marginBottom:10}}
          type="submit"
          className="btn btn-primary mt-3 col-12"
        >
          Iniciar Secion
        </button>
        <a class="btn btn-primary col-12" href="/create">crear cuenta</a>  
      </form>
    </div>
  );
};

export default Login;
