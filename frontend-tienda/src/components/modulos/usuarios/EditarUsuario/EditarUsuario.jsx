import React, { useState } from 'react';


const EditarUsuario = () => {

    const [usuario, setUsuario] = useState({
        ID: '001',
        nombreUsuario: '',
        Nombres: '',
        Email: '',
        RolUsuario: '',
        Estado: ''

    })
    const usuarioOnChage = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    const actualizarUsuario=(e)=>{
        e.preventDefault()
        console.log(usuario)
        alert(`${usuario.nombreUsuario} actualizado correctamente`)
    }

    return (

        <section className="section">
            <div className="container">
                <form className="formularioActualizarUsuario">
                    <div className="row">
                        <div className="form-group col-12 col-md-6">
                            <label className="form-label">ID</label>
                            <input type="text" className="form-control" id="id" name="ID" value={usuario.ID} onChange={usuarioOnChage} disabled />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label className="form-label">NombreUsuario</label>
                            <input type="text" className="form-control" id="idNombreusuario" name="nombreUsuario" value={usuario.nombreUsuario} onChange={usuarioOnChage} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Nombres y Apellidos</label>
                            <input type="text" className="form-control" id="idNombres" name="Nombres" value={usuario.Nombres} onChange={usuarioOnChage} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Email</label>
                            <input type="text" className="form-control" id="idemail" name="Email" value={usuario.Email} onChange={usuarioOnChage} />
                        </div>
                    </div>


                </form>
            </div>
        </section>

    )

}
export default EditarUsuario;