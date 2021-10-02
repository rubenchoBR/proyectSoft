import React from 'react';

const BarraBusqueda = ()=>{
    return(
        <div>
            <form className="container d-flex mb-10">
                <input className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    )
}
export default BarraBusqueda;