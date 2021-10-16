import React, { useState, useEffect } from 'react';

const CarritoCompras = ({articulosComprados}) => {

    
    const [articulos, setArticulos] = useState([]);

    const eliminar = (articulo) =>{
        var indiceArticulo = articulosComprados.findIndex(elemento => elemento.idElemento === articulo.idElemento);
        if(indiceArticulo > -1){
            setArticulos([articulosComprados.splice(indiceArticulo,1)]);
        }
    }
    




        
    const confirmar = () =>{
        fetch('http://localhost:9000/api/crear-venta',
        {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json' 
            }),
            body:JSON.stringify({DetallesVentas: crearVenta(articulosComprados)})
        }
        )
        .then((res) => res.json())
        .then(data => this.setState({ postId: data.id }))
        .catch((err) => {

        });
    }



    const crearVenta = (articulos) =>{
        return articulos.map(articulo => {
            var detalle = {};
            detalle.cantidad =1;
            detalle.total= articulo.valor;
            return detalle;
        });
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
            {!!articulosComprados && articulosComprados.length > 0 &&
                <button onClick={() => confirmar()} className="btn btn-primary w-100">Confirmar</button>
            }
            </div>
        
    )
}

export default CarritoCompras
