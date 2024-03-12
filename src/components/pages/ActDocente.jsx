import { Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import acomp from "../../../public/acompTrayectorias.png"
import gestion from "../../../public/gestionDir.png"
import nuevas from "../../../public/nuevaspracticas.png"

const ActDocente = () => {
    return (
        <>
        <Container className="shadow-sm ">
        <div className="text-center">
          <h3>Ofertas de Actualización Docente</h3>
        </div> 
        <div className="shadow-sm ">
            <NavLink as={Link} to="/actualizacion">
            <img src={acomp} alt="" className="imgDocent " />
            </NavLink>
        </div>
        <div className="shadow-sm my-2">
            <NavLink as={Link} to="/gestion">
            <img src={gestion} alt="" className="imgDocent " />
            </NavLink>
        </div>
        <div className="shadow-sm my-2">
        <NavLink as={Link} to="/nuevaspracticas">
            <img src={nuevas} alt="" className="imgDocent " />
            </NavLink>
        </div>
        </Container>
          
        </>
    );
};

export default ActDocente;