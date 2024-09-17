import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import VerPopular from "./pages/VerPopular";
import VerMejorPuntuadas from "./pages/VerMejorPuntuadas";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  let menu = [
    'nombreGrupo',
    'Home',
    'Favoritos',
    'Ver todas',
  ]
  return (
    <React.Fragment>
        <Navbar elementosMenu ={menu}  />
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/VerPopular/id/:id" component={VerPopular} />
            <Route path="/VerMejorPuntuadas/id/:id" component={VerMejorPuntuadas} />
            <Route path="/Detalle" component={Detalle} />
            <Route path="/Favoritos" component={Favoritos} />
            <Route path="/SearchResults" component={SearchResults} />
            <Route path="" component={NotFound} />
        </Switch>
        </main>
        <Footer/>
          </Router>
      
    </React.Fragment>
  );
}

export default App;
