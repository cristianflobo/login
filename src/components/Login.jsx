import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login1 } from "../actions/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState({
    user: "",
    password: "",
  });
  const poke = useSelector((store) => store.login.count);
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(login1(e))
  };
  const handleChange = (e) => {
    
    setfirst({
      ...first,
      [e.target.name]: e.target.value,
    });
    //console.log(e.target);
  };
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
          value={first.user}
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
            value={first.password}
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Password"
          />
        </div>
        <button
          //onClick={(e) => dispatch(login1(e))}
          type="submit"
          className="btn btn-primary mt-3 col-5"
          style={{ marginRight: 55 }}
        >
          Iniciar Secion
        </button>
        <button type="submit" className="btn btn-primary mt-3 col-5">
          Crear Cuenta
        </button>
      </form>
    </div>
  );
};

export default Login;
