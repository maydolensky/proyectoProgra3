import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import VerPopular from "./pages/VerPopular";
import VerMejorPuntuadas from "./pages/VerMejorPuntuadas";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/VerPopular/id/:id" component={VerPopular} />
        <Route path="/VerMejorPuntuadas/id/:id" component={VerMejorPuntuadas} />
        <Route path="/Detalle" component={Detalle} />
        <Route path="/Favoritos" component={Favoritos} />
        <Route path="/Search/:id" component={Search} />
        <Route path="" component={NotFound} />
      </Switch>
      <footer>
        <p></p>
      </footer>
    </>
  );
}

export default App;
