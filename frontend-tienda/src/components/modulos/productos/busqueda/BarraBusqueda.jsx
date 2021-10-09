import { React, useState } from "react";

const BarraBusqueda = (props) => {
  // const {onSearchChange} = props
  //const  [search, setSearch] = useState('');

  /* const onSearchChange = (e)=>{
        setPaginaActual(0);
        setSearch(e.target.value);
    }*/
  let obtenerPalabra = (e) => {
    props.onSearchChange(e);
  };
  return (
    <div>
      {/* <form className="container d-flex mb-10">
                <input className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form> */}

      <form className="container d-flex mb-10">
        <input
          className="form-control me-2"
          type="search"
          name="search"
          placeholder="Buscar Producto"
          value={props.search}
          aria-label="Search"
          onChange={obtenerPalabra}
        />
      </form>
    </div>
  );
};
export default BarraBusqueda;
