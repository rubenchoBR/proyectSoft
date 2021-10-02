import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import ActualizarProductos from "./components/modulos/productos/actualizar/ActualizarProductos";
import ArticulosVenta from "./components/modulos/ventas/ArticulosVenta";
import CarritoCompras from "./components/modulos/ventas/CarritoCompras";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      
      <Router>
        <Switch>
          <Route
            exact
            path="/actualizar-producto"
            component={ActualizarProductos}
          />
          <Route
            exact
            path="/verArticulos"
            component={ArticulosVenta}
          />
          <Route
            exact
            path="/verCarrito"
            component={CarritoCompras}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
