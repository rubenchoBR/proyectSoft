import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './loginStyle.css';

const Login = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({})

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => { 
        e.preventDefault();
        history.push('/verArticulos')
    }

    return (
        <div className="login">            
            <div className="login-form ">
                <h1>GigaDevs Shop</h1>
                <form>                
                <div className="form-group ">
                    <input onChange={changeField} value={formValues.username} name="username" type="email" className="form-control" placeholder="Nombre de usuario" id="UserName" />
                    <i class="fa fa-user"></i>
                </div>
                <div className="form-group log-status">
                    <input onChange={changeField} value={formValues.password} name="password" type="password" className="form-control" placeholder="Contraseña" id="Password"/>
                    <i class="fa fa-lock"></i>
                </div>
                <a className="link" href="#">¿Olvidaste tu contraseña?</a>
                <button type="submit" onClick={submit} type="button" className="log-btn" >Ingresar</button>          
                </form>
            </div>
            
        </div>
    );
}
export default Login;