import React, { useState } from 'react';
import {articulos} from '../datos/Articulos';
import CarritoCompras from './CarritoCompras';
import { useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';



const ArticulosVenta = () => {

    const [artVenta, setArtVenta] = useState(
        []
    );

    const [articulosAMostrar, setArticulosAMostrar] = useState(
        articulos
    );

    const adicionar = (articulo) =>{
        setArtVenta([...artVenta,articulo])
    }

    const normalizarTexto = (texto) =>{
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    const filtrar = (e) =>{
        setArticulosAMostrar(articulos);
        var textoBusqueda = e.target.value;
        if(!!textoBusqueda){
            textoBusqueda = normalizarTexto(textoBusqueda);
            var elementoEncontrado = articulosAMostrar.find(nombre => 
                normalizarTexto(nombre.nombre).match( textoBusqueda)
                );
            if(!!elementoEncontrado){
                setArticulosAMostrar([elementoEncontrado]);
                return;
            }
        }
    }

    return (
        <div className="container">
            <div className='row p20'>
                <div  className='col-md-2 mt-3'>Buscar art&iacute;culo: </div>
                <input className='col-md-8 mt-3' type="text"  onChange={filtrar} />
          </div>
        <div className='row'>
            {
            articulosAMostrar.map(elemento => {
                return (

                <div className='col-md-3 m-3'>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{elemento.nombre}</h5>
                            <img src={elemento.imagen} key={elemento} alt={elemento.nombre} className="imagen-articulo"/>
                            <p><span>Precio: $</span> {elemento.valor}</p>
                            <button onClick={() => adicionar(elemento)} className="btn btn-primary w-100">Comprar</button>
                        </div>
                    </div> 
                 
                </div>

                );
            })
            }
        <CarritoCompras articulosComprados={artVenta}/>      
        </div>
        </div>
    )
}

export default ArticulosVenta