import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        actions.login(email, password) ? navigate("/") : alert("No te has logueado correctamente")        
    }


    return (
        <form className="container" onSubmit={e => handleSubmit(e)}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" onChange={e=>setEmail(e.target.value)} />
            </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" >Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" onChange={e=>setPassword(e.target.value)} />
                </div>            
            </div>

            <input type="submit" className="btn btn-primary" value="Login" />
        </form>
    );
};
