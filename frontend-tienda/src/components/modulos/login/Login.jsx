import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './loginStyle.css';
import GoogleLogin from 'react-google-login';

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

    const responseGoogle=(resp)=>{
        console.log(resp);
        //console.log(resp.profileObj);
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
                <button type="submit" onClick={submit} className="log-btn" >Ingresar</button>          
                <div className="log-google">
            <GoogleLogin
    clientId="894522620126-9i1hhddhphjmi0jjqmbk6h46pv4jsbei.apps.googleusercontent.com"
    buttonText="Acceder con cuenta de Google"
    /*render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Acceder con cuenta de Google</button>
      )}*/
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </div>

                </form>
            </div>
            
        </div>
    );
}
export default Login;