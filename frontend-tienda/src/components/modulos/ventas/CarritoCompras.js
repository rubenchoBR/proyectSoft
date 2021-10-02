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
       

            <div className="container-fluid">
                <div className='row '>
                <div className='col-4 mt-1 mr-5'>Articulo</div>
                <div className='col mt-1'>Precio</div>
                <div className='col mt-1'>Acción</div>
                {
                !!articulosComprados && articulosComprados.map((articulo)=>{
                        return(
                            <div className='row'>
                                <div className='col-4 mt-1  ml-5 ajuste-texto'>{articulo.nombre}</div>
                                <div className='col mt-1'>{articulo.valor}</div>
                                <div className='col mt-1 justify-content-md-center'>
                                    <button onClick={() => eliminar(articulo)} className="btn btn-primary btn-sm align-middle">Eliminar</button>
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
