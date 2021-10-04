import React from 'react';
import './loginStyle.css';

const Login = () => {
    return (
        <div>
            <body>
            <div className="login-form">
                <h1>GigaDevs Shop</h1>
                <div className="form-group ">
                    <input type="email" className="form-control" placeholder="Nombre de usuario" id="UserName" />
                    <i class="fa fa-user"></i>
                </div>
                <div className="form-group log-status">
                    <input type="password" className="form-control" placeholder="Contraseña" id="Password"/>
                    <i class="fa fa-lock"></i>
                </div>
                <a className="link" href="#">¿Olvidaste tu contraseña?</a>
                <button type="button" className="log-btn" >Ingresar</button>
            </div>
            </body>
        </div>
    );
}
export default Login;