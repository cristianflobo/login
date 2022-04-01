import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login1 } from "../actions/actions";

const Create = () => {
    const dispatch = useDispatch();
    const [form1, setform1] = useState({
      user: "",
      password: "",
      confirmar:"",
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
      var hoy = new Date();
      var fecha =  hoy.getDay();
      console.log(fecha)
      //console.log(e.target.name);
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
          <label className="sr-only" for="inlineFormInputGroupUsername3">
          Confirmar password
          </label>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="password"
              name="confirmar"
              onChange={(e)=>handleChange(e)}
              value={form1.confirmar}
              className="form-control"
              id="inlineFormInputGroupUsername3"
              placeholder="Confirmar password"
            />
          </div>
          

          <button
            //onClick={(e) => dispatch(login1(e))}
            type="submit"
            className="btn btn-primary mt-3 col-12"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    );
  };

export default Create