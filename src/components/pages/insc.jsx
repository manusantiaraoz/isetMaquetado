import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import acomp from "../../../public/tecnicaturas.png"


const insc = () => {
    return (
        <>
        <Container className="shadow-sm ">
        <div className="shadow-sm ">
            <NavLink as={Link} to="/inscripciones">
            <img src={acomp} alt="" className="imgDocent " />
            </NavLink>
        </div>
        </Container>
          
        </>
    );
};

export default insc;