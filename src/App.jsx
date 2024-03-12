import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Equipo from "./components/pages/Equipo";
import Actualizacion from "./components/pages/Actualizacion";
import Gestion from "./components/pages/Gestion";
import NuevasPracticas from "./components/pages/NuevasPracticas";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>

      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/nosotros" element={<Equipo></Equipo>}></Route>
        <Route exact path="/actualizacion" element={<Actualizacion></Actualizacion>}></Route>
        <Route exact path="/gestion" element={<Gestion></Gestion>}></Route>
        <Route exact path="/nuevaspracticas" element={<NuevasPracticas></NuevasPracticas>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
