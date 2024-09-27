import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import VerPopular from "./pages/VerPopular";
import VerMejorPuntuadas from "./pages/VerMejorPuntuadas";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer/Footer";

function App() {
  let menu = [
    { name: 'Home', link: '/' },
    { name: 'Favoritos', link: '/Favoritos' },
    { name: 'Populares', link: '/VerPopular' },
    { name: 'Mejores Puntuadas', link: '/VerMejorPuntuadas' },
    //Preguntar si hay que agregar 'nombreGrupo', 

  ]
  return (
    <React.Fragment>
      <Router>
        <Navbar elementosMenu={menu} />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/VerPopular"  component={VerPopular} />
            <Route path="/VerMejorPuntuadas"  component={VerMejorPuntuadas} />
            <Route path="/Detalle/id/:id"  component={Detalle} />
            <Route path="/Favoritos"  component={Favoritos} />
            <Route path="/SearchResults"  component={SearchResults} />
            <Route component={NotFound} />

          </Switch>
        </main>
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default App;
