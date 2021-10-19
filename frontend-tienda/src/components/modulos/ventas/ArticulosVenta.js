import React, { useState , useEffect} from 'react';
import {articulos} from '../../../datos/Articulos';
import Header from '../../layout/header/Header';
import CarritoCompras from './CarritoCompras';

//import { useSelector, useDispatch } from 'react-redux';
//import { createStore } from 'redux';



const ArticulosVenta = () => {

    const [artVenta, setArtVenta] = useState(
        []
    );

    const [articulosAMostrar, setArticulosAMostrar] = useState(
        //articulos
        []
        

    );

    useEffect(() => {
        fetch('http://127.0.0.1:5300/api/productos',
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
        
        )
      .then((res) => res.json())
      .then(data => {setArticulosAMostrar(data.listaProductos)})
      .catch((err) => {

      });
      
      
        },[])
        console.log(articulosAMostrar);

        /*/*
        fetch('http://localhost:9000/api/obtener-articulos')
         .then(function(resp){
            setArticulosAMostrar(resp.json())
            }
        ).then(data => setArticulosAMostrar(data))*/

    const adicionar = (articulo) =>{
        setArtVenta([...artVenta,articulo])
    }

    const normalizarTexto = (texto) =>{
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    const filtrar = (e) =>{
        setArticulosAMostrar(articulosAMostrar);
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

    return articulosAMostrar ? (
        <div className="container">
            <div  className='row margen-contenedor'>
            <div className='col-md-9'> 
                <div className='row p20'>
                    <div  className='col-md-2 mt-3 mb-3'>Buscar art&iacute;culo: </div>
                    <input className='col-md-8 mt-3 mb-3' type="text"  onChange={filtrar} />
            </div>
                <div className='row'>
                    {
                    articulosAMostrar.length > 0 && articulosAMostrar.map(elemento => {
                        return (

                        <div className='col-4 ml-1  mb-3'>
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{elemento.nombre}</h5>
                                    <img src={`http://127.0.0.1:5300/api/productos/imagen/${elemento.imagen}`} key={elemento} alt={elemento.nombre} className="imagen-articulo"/>
                                    <p><span>Precio: $</span> {elemento.valor}</p>
                                    <button onClick={() => adicionar(elemento)} className="btn btn-primary w-100">Comprar</button>
                                </div>
                            </div> 
                        
                        </div>

                        );
                    })
                    }
                </div>  
            </div>
            <div  className='col-md-3'>
            <CarritoCompras articulosComprados={artVenta} /> 
            </div>
            </div>
        </div>
    ): null
}

export default ArticulosVenta
