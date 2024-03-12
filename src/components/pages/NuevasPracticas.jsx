import { Container, ListGroup } from "react-bootstrap";

const NuevasPracticas = () => {
    return (
        <>
               <Container>
        <h3 className="text-center my-3">
        Gestión  Directiva y Prácticas Educativas
        </h3>

        <section className="container shadow-sm">
          <article className="row">
            <article className="col-lg-6 my-2 ">
              <ListGroup className="border border-warning">
                <ListGroup.Item className="border-warning">
                  Modalidad: a distancia (virtual), en el{" "}
                  <a href="https://campus.educaciontuc.gov.ar/lms/">
                    {" "}
                    Campus Virtual del Ministerio de Educación
                  </a>{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border-warning">
                Destinatarios: Docentes de Nivel Secundario, Técnico Profesional y Superior, de todas las áreas y todos los circuitos.  Profesionales con título universitario, que no poseen título docente de base, con antigüedad mínima de 5 años.
                </ListGroup.Item>
                <ListGroup.Item className="border-warning">
                  Carga horaria total: 200 hs reloj
                </ListGroup.Item>
                <ListGroup.Item className="border-warning">
                  Inicio: Mayo 2023{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border-warning">
                  Preinscripcion: del 25/4 al 10/5 de 19 a 21 hs. en ISET(
                  Domingo García 47)
                </ListGroup.Item>
              </ListGroup>
            </article>
            <article className="col-lg-6 my-2 d-flex align-content-center justify-content-center">
              <img
                src="https://www.cetys.mx/noticias/wp-content/uploads/2020/07/20670.jpg"
                alt=""
                className="w-100 rounded"
              />
            </article>
          </article>
        </section>
        <p className="text-center my-3 bg-light rounded py-2 shadow-sm">
          <cite>
          Esta actualización académica, que se propone desarrollar instancias de desarrollo profesional y formación pedagógica, promoviendo instancias de innovación y transformación en las instituciones educativas. Trabajaremos los aspectos de la tarea docente que aparecen como nuevos requerimientos y exigencias al rol profesional. Esta propuesta se aborda desde una perspectiva multireferencial que intenta dar cuenta de  la complejidad del fenómeno educativo. En este marco los contenidos de los Cursos y Talleres que se desarrollarán serán trabajados desde las siguientes dimensiones de análisis:
<ul className="text-center sacarPuntos my-2">
<li >Socio-política</li>
<li>Didáctica – Curricular</li>
<li>Institucional</li>
<li>Psicología Educacional</li>
<li>TIC</li>
<li>Político-intercultural</li>

</ul>

          </cite>
        </p>
        <ul class="list-group list-group-horizontal-xxl my-2 shadow-sm">
          <li class="list-group-item bg-warning text-center">ESPACIOS CURRICULARES</li>
          <li class="list-group-item">Módulo 1. Marco Normativo e Institución Educativa.</li>
          <li class="list-group-item">Módulo 2. Adolescencias y juventudes en la escuela de hoy.</li>
          <li class="list-group-item">Módulo 3. Desafíos de la Cultura Digital en escenarios educativos diversos.</li>
          <li class="list-group-item">Módulo 4. Acerca de las prácticas docentes: demandas y desafíos.</li>
          <li class="list-group-item">Módulo 5. La relación pedagógica como marco del proceso de aprendizaje.</li>
          <li class="list-group-item">Módulo 6. Estrategias de resolución de conflictos en el marco de las instituciones educativas.</li>
          <li class="list-group-item">Módulo 7. Taller Integrador “Educar desde la diversidad”.  </li>
        </ul>
      </Container>
        </>
    );
};

export default NuevasPracticas;