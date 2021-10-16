import React, { useState } from 'react';
import './actualizar.css'
const axios = require('axios');

const ActualizarProductos=(props)=>{
    console.log(props.producto)
    const [producto, setProducto] = useState({
        identificador: props.producto.idElemento,
        nombre: props.producto.nombre,
        valor: props.producto.valor,
        descripcion: props.producto.detalle,
        disponibilidad: props.producto.disponibilidad
        //imagen:props.producto.imagen

    })
    const [imagen, setImagen] = useState(props.producto.imagen)
    
    const productOnChage = (e) => {
         
        
        setProducto({
            ...producto,
            [e.target.name]: e.target.value 
           
        })
    }
    const fileOnChage = (e) => {
        
        setImagen(e.target.files[0])
        
            
        }
    
    const actualizarProduct=(e)=>{
        e.preventDefault()
        console.log(producto)

        console.log(imagen);
            const formData= new FormData();

            formData.append(
                'file0',
                imagen,
                imagen.name
            )
            formData.append(
                'nombre',
                producto.nombre
            )
            formData.append(
                'valor',
                producto.valor
            )
            formData.append(
                'descripcion',
                producto.descripcion
            )
            formData.append(
                'disponibilidad',
                producto.disponibilidad
            )
            console.log(formData);
        axios.post('http://127.0.0.1:5300/api/productos',formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert(`${producto.nombre} actualizado correctamente`)
    }

    
    return (
        <section className="section">
            <div className="container">
                <form className="formularioActualizarProduct"> 
                    <div className="row">
                        <div className="form-group col-12 col-md-6">
                            <label className="form-label">Identificador</label>
                            <input type="text" className="form-control" id="idIdentificador" name="identificador" value={producto.identificador} onChange={productOnChage}disabled />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="idNombre" name="nombre" value={producto.nombre} onChange={productOnChage} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Valor</label>
                            <input type="number" className="form-control" id="idValor" name="valor" value={producto.valor} onChange={productOnChage}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Descripción</label>
                            <input  type="text" className="form-control" id="idDescripcion" name="descripcion" value={producto.descripcion} onChange={productOnChage}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label  className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="idImagen" name="imagen" files={imagen} onChange={fileOnChage} />
                            <img src={imagen} alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <fieldset className="row mb-3 mt-2" />
                            <legend className="col-form-label col-sm-2 pt-0">Disponibilidad</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="disponibilidad" id="idDisponibilidad"
                                        value={true}  onChange={productOnChage}/>
                                    <label className="form-check-label" >
                                        Disponible
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="disponibilidad" id="idDisponibilidad2"
                                        value={false} onChange={productOnChage}/>
                                    <label className="form-check-label" >
                                        No Disponible
                                        </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={actualizarProduct}>Actualizar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default ActualizarProductos