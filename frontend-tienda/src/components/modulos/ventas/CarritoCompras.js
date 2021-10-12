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
            <div>
            {!!articulosComprados && articulosComprados.length > 0 &&
            <table  class="table table-hover contenedor-articulos-carro">
                <thead>
                    <tr>
                <th  scope="col">Art&iacute;culo</th>
                <th  scope="col">Precio</th>
                <th  scope="col">Acci&oacute;n</th>
                </tr>
                </thead>
                <tbody>
                {
                !!articulosComprados && articulosComprados.map((articulo)=>{
                        return(
                            <tr  scope="row">
                                <td>{articulo.nombre}</td>
                                <td>{articulo.valor}</td>
                                <td>
                                    <a href="#" onClick={() => eliminar(articulo)} ><span className="texto-boton-eliminar">Eliminar</span></a>
                                </td>
                            </tr>
                        )
                    })
                }
           </tbody>
            </table>
            }
            </div>
        
    )
}

export default CarritoCompras
