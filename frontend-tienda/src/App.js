import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import ActualizarProductos from "./components/modulos/productos/actualizar/ActualizarProductos";
import ArticulosVenta from "./components/modulos/ventas/ArticulosVenta";
import CarritoCompras from "./components/modulos/ventas/CarritoCompras";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListarProductos from "./components/modulos/productos/listar/ListarProductos";
import Login from "./components/modulos/login/Login";
import  { useEffect } from "react";

function App() {


  useEffect(() => {
   fetch('http://localhost:9000/api')
    .then(resp => resp.json())
    .then(data => this.setState())
   },[]);

   

  return (
    <div>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/listarProductos" component={ListarProductos} />
          <Route exact path="/verArticulos" component={ArticulosVenta} />
          <Route exact path="/verCarrito" component={CarritoCompras} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
