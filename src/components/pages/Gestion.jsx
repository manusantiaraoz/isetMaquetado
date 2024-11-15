import { Container, ListGroup } from "react-bootstrap";

const Gestion = () => {
    return (
        <>
            <Container>
        <h3 className="text-center  mt-5">
        Gestión  Directiva y Prácticas Educativas
        </h3>

        <section className="container shadow-sm">
          <article className="row">
            <article className="col-lg-6 my-2 ">
              <ListGroup className="border border-danger">
                <ListGroup.Item className="border-danger">
                  Modalidad: a distancia (virtual), en el{" "}
                  <a href="https://campus.educaciontuc.gov.ar/lms/">
                    {" "}
                    Campus Virtual del Ministerio de Educación
                  </a>{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border-danger">
                Destinatarios: Directores y Vicedirectores con cargo del Nivel Secundario de todas las modalidades, las áreas y circuitos.
                </ListGroup.Item>
                <ListGroup.Item className="border-danger">
                  Carga horaria total: 200 hs reloj
                </ListGroup.Item>
                <ListGroup.Item className="border-danger">
                  Inicio: Mayo 2023{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border-danger">
                  Preinscripcion: del 25/4 al 10/5 de 19 a 21 hs. en ISET(
                  Domingo García 47)
                </ListGroup.Item>
              </ListGroup>
            </article>
            <article className="col-lg-6 my-2 d-flex align-content-center justify-content-center">
              <img
                src="https://contactomaestro.colombiaaprende.edu.co/sites/default/files/maestrospublic/bancorecursos/libroreimers1.png"
                alt=""
                className="w-100 rounded"
              />
            </article>
          </article>
        </section>
        <p className="text-center my-3 bg-light rounded py-2 shadow-sm">
          <cite>
          Esta Actualización Académica asume el compromiso político pedagógico de contribuir a la formación continua de directoras, directores y vicedirectoras/es de nivel secundario de todas las modalidades, áreas y circuitos,que se encuentran en ejercicio.  Tiene por objetivos centrales: contribuir a la formación continua de directoras y directores en contextos complejos, fortalecer el compromiso ético político de directivos como garantes de la centralidad de la enseñanza como fin institucional y jerarquizar el trabajo de gestión directiva como una práctica política y democrática. Los dispositivos metodológicos se articulan en torno a un abordaje crítico en relación con los saberes prácticos, experienciales y marcos conceptuales diversos. La estructura curricular se organiza en 7 módulos. Cada espacio curricular se desarrollará con 4 encuentros y un Taller Final Integrador de 3 encuentros, todos de carácter virtual dictados en la plataforma moodle del Ministerio de Educación de Tucumán.
          </cite>
        </p>
        <ul class="list-group list-group-horizontal-xxl my-2 shadow-sm">
          <li class="list-group-item bg-danger text-center">ESPACIOS CURRICULARES</li>
          <li class="list-group-item">Módulo 1. Seminario: La Construcción subjetiva e identitaria del rol Directivo.</li>
          <li class="list-group-item">Módulo 2. Seminario: Estrategias directivas en torno a liderazgo educativo.</li>
          <li class="list-group-item">Módulo 3. Taller: Acompañamiento Pedagógico como práctica de gobierno y gestión directiva en contexto institucional e intercultural. </li>
          <li class="list-group-item">Módulo 4. Seminario: Las Políticas Públicas en Escenarios de Gestión Institucional.</li>
          <li class="list-group-item">Módulo 5. Taller: Gestión Directiva y TIC.</li>
          <li class="list-group-item">Módulo 6. Seminario: Las Prácticas de Gobierno en Situaciones Institucionales Complejas.</li>
          <li class="list-group-item">Módulo 7. Taller Integrador: Narrar las prácticas de formación. </li>
        </ul>
      </Container>
        </>
    );
};

export default Gestion;