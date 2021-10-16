import {React,useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import {articulos} from '../../../../datos/Articulos'
import BarraBusqueda from '../busqueda/BarraBusqueda';
import ActualizarProductos from '../actualizar/ActualizarProductos';
import { useHistory } from 'react-router'
const axios = require('axios');



const ListarProductos = ()=>{
    const history = useHistory();   
    
    console.log(articulos)
    const  [search, setSearch] = useState('');
    const [paginaActual, setPaginaActual] = useState(0)

    const [lgShow, setLgShow] = useState(false);
    const [formProduct,setFormProduct]=useState({nombre:'', valor: 0, descripcion: '', imagen:"", idElemento:0,disponibilidad:false})
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    useEffect(() => {
        fetch('http://127.0.0.1:5300/api/productos')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      console.log(items)
          
    const onSearchChange = (e)=>{
        console.log(e)
        setPaginaActual(0);
       setSearch(e.target.value);
    }
    const actualizar=(e,producto)=>{
        setLgShow(true)
        setFormProduct(producto)
        console.log(e,producto);
    }

    const filtrarProductos=()=>{
        console.log(items.listaProductos);
        if(items.listaProductos ){
            if (search.length===0){
                console.log(items.listaProductos)
                return items.listaProductos.slice(paginaActual,paginaActual+ 10)
            }
            //si hay datos en el input search
            const productosFiltrados = items.listaProductos.filter(product=> product.nombre.toLowerCase().includes(search.toLowerCase()) || product.descripcion.toLowerCase().includes(search.toLowerCase()));
            return productosFiltrados.slice(paginaActual,paginaActual+10);
        }else{
            return items
        }
        
    }

    const siguiente =()=>{
        if(items.listaProductos.filter(product=> product.nombre.toLowerCase().includes(search.toLowerCase())).length>paginaActual+10)
        setPaginaActual(paginaActual+10)
    }
    const anterior=()=>{
        if(paginaActual>0)
            setPaginaActual(paginaActual-10)
        
    }
    const registrar=()=>{
        history.push('/registrarProducto')
    }
   
    return (

        <div className="container">
            <BarraBusqueda onSearchChange={onSearchChange} setSearch={setSearch} search={search}/>
            <hr/>
            <button className="btn btn-primary"  onClick={anterior}>Anterior</button>
            &nbsp;
            <button className="btn btn-primary"  onClick={siguiente}>Siguiente</button>
      
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button" onClick={registrar}>Registrar Producto</button>
                
            </div>
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
                    {   filtrarProductos().length>0?
                        filtrarProductos().map((producto) =>(
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.valor}</td>
                                <td>{producto.descripcion}</td>
                                <td> 
                                    <button className="btn btn-primary btn-sm" onClick={(e) => actualizar(e,producto)}>Actualizar</button>&nbsp;
                                    <button className="btn btn-danger btn-sm">Eliminar</button>
                                </td>
                            </tr>
                        )):<div>No hay productos</div>
                    }


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
                <ActualizarProductos producto={formProduct}/>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ListarProductos;