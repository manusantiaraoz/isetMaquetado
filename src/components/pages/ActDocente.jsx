import { Container, Button } from "react-bootstrap";
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
            <a href="https://iset-tuc.infd.edu.ar/sitio/acompanamiento-a-las-trayectorias-escolares-en-la-educacion-tecnico-profesional/" target="_blanck">
            <img src={acomp} alt="" className="imgDocent " />
            </a>
        </div>
        <div className="shadow-sm my-2">
            <a href="https://iset-tuc.infd.edu.ar/sitio/actualizacion-academica-2/" target="_blanck">
            <img src={gestion} alt="" className="imgDocent " />
            </a>
        </div>
        <div className="shadow-sm my-2">
        <a href="https://iset-tuc.infd.edu.ar/sitio/actualizacion-academica/" target="_blanck">
            <img src={nuevas} alt="" className="imgDocent " />
            </a>
        </div>
        </Container>
          
        </>
    );
};

export default ActDocente;