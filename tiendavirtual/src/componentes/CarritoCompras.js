import React, { useState } from 'react';

const CarritoCompras = ({articulosComprados}) => {

    
    const [articulos, setArticulos] = useState([]);

    const eliminar = (articulo) =>{
        var indiceArticulo = articulosComprados.findIndex(elemento => elemento.idElemento === articulo.idElemento);
        if(indiceArticulo > -1){
            setArticulos([articulosComprados.splice(indiceArticulo,1)]);
        }
    }
    
    return (
        <div className="container">
            
            <div className='row'>
            <div className='text-left col-md-8 m-8 '>Articulo</div>
            <div className='col-md-2 m-2 text-left'>Precio</div>
            <div className='col-md-1 m-1 text-left'>Acción</div>
            {
            !!articulosComprados && articulosComprados.map((articulo)=>{
                    return(
                        <div className='row'>
                            <div className='col-md-8 m-8'>{articulo.nombre}</div>
                            <div className='col-md-2 m-2'>{articulo.valor}</div>
                            <div className='col-md-1 m-1'>
                                <button onClick={() => eliminar(articulo)} className="btn btn-primary w-100">Eliminar</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default CarritoCompras
