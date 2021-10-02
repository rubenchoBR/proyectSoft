import React from 'react';
import {articulos} from '../../../../datos/Articulos'
import BarraBusqueda from '../busqueda/BarraBusqueda';

const ListarProductos = ()=>{
    return (

        <div className="container">
            <BarraBusqueda/>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            articulos.map((producto) =>(
                                <tr>
                                    <td>{producto.idElemento}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.valor}</td>
                                    <td>{producto.detalle}</td>
                                    <td> 
                                        <button className="btn btn-primary btn-sm">Actualizar</button>
                                        <button className="btn btn-danger btn-sm">Eliminar</button>
                                    </td>
                                </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        
        </div>
    );
}

export default ListarProductos;