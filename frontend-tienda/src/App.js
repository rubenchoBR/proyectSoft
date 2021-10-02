import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import ActualizarProductos from "./components/modulos/productos/actualizar/ActualizarProductos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Footer />
      <Router>
        <Switch>
          <Route
            exact
            path="/actualizar-producto"
            component={ActualizarProductos}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
