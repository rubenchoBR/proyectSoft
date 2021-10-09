import {React,useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import {articulos} from '../../../../datos/Articulos'
import BarraBusqueda from '../busqueda/BarraBusqueda';
import ActualizarProductos from '../actualizar/ActualizarProductos'

const ListarProductos = ()=>{
    console.log()
    const  [search, setSearch] = useState('');
    const [paginaActual, setPaginaActual] = useState(0)

    const [lgShow, setLgShow] = useState(false);

    const onSearchChange = (e)=>{
        console.log(e)
        setPaginaActual(0);
       setSearch(e.target.value);
    }

    const filtrarProductos=()=>{
        if (search.length===0)
            return articulos.slice(paginaActual,paginaActual+ 4)
        //si hay datos en el input search
        const productosFiltrados = articulos.filter(product=> product.nombre.toLowerCase().includes(search.toLowerCase()) || product.detalle.toLowerCase().includes(search.toLowerCase()));
        return productosFiltrados.slice(paginaActual,paginaActual+4);
    }

    const siguiente =()=>{
        if(articulos.filter(product=> product.nombre.toLowerCase().includes(search.toLowerCase())).length>paginaActual+4)
        setPaginaActual(paginaActual+4)
    }
    const anterior=()=>{
        if(paginaActual>0)
            setPaginaActual(paginaActual-4)
        
    }
   
    return (

        <div className="container">
            <BarraBusqueda onSearchChange={onSearchChange} setSearch={setSearch} search={search}/>
            <hr/>
            <button className="btn btn-primary"  onClick={anterior}>Anterior</button>
            &nbsp;
            <button className="btn btn-primary"  onClick={siguiente}>Siguiente</button>
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
                        filtrarProductos().map((producto) =>(
                            <tr key={producto.idElemento}>
                                <td>{producto.idElemento}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.valor}</td>
                                <td>{producto.detalle}</td>
                                <td> 
                                    <button className="btn btn-primary btn-sm" onClick={() => setLgShow(true)}>Actualizar</button>
                                    <button className="btn btn-danger btn-sm">Eliminar</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Actualizar Productos
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ActualizarProductos/>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ListarProductos;