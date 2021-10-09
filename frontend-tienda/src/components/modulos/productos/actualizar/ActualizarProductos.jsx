import React from 'react';
import './actualizar.css'

const ActualizarProductos=()=>{
    return(
        <section className="section">
            
                <form className="formularioActualizarProduct">
                    <div className="row">
                        <div className="form-group col-12 col-md-6">
                            <label className="form-label">Identificador</label>
                            <input type="text" className="form-control" id="idIdentificador" disabled/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword4" className="form-label">Nombre</label>
                            <input type="password" className="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Valor</label>
                            <input type="number" className="form-control" id="inputAddress"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Descripción</label>
                            <input type="text" className="form-control" id="inputAddress2"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="inputCity" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="inputCity"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <fieldset className="row mb-3 mt-2"/>
                                <legend className="col-form-label col-sm-2 pt-0">Disponibilidad</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                            value="option1" checked/>
                                        <label className="form-check-label" for="gridRadios1">
                                            Disponible
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                            value="option2"/>
                                        <label className="form-check-label" for="gridRadios2">
                                            No Disponible
                                        </label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                    </div>
                </form>
            
        </section>
    );
}
export default ActualizarProductos