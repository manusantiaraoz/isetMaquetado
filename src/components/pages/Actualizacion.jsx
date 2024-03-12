import { Container, ListGroup } from "react-bootstrap";

const Actualizacion = () => {
  return (
    <>
      <Container>
        <h3 className="text-center my-3">
          Acompañamiento a las Trayectorias Escolares en la ETP
        </h3>

        <section className="container shadow-sm">
          <article className="row">
            <article className="col-lg-6 my-2 ">
              <ListGroup className="border border-primary-subtle  ">
                <ListGroup.Item className="border-primary-subtle">
                  Modalidad: a distancia (virtual), en el{" "}
                  <a href="https://campus.educaciontuc.gov.ar/lms/">
                    {" "}
                    Campus Virtual del Ministerio de Educación
                  </a>{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border-primary-subtle">
                  Destinatarios : Directivos, Docentes, Asesor Pedagógico,
                  Tutor, Preceptor, Secretario de Nivel Secundario, de la
                  Modalidad Técnico Profesional de todas las áreas. Circuito:
                  todos los Circuitos (I,II,III ,IV, V ).
                </ListGroup.Item>
                <ListGroup.Item className="border-primary-subtle">
                  Carga horaria total: 200 hs reloj
                </ListGroup.Item>
                <ListGroup.Item className="border-primary-subtle">
                  Inicio: Mayo 2023{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border-primary-subtle">
                  Preinscripcion: del 25/4 al 10/5 de 19 a 21 hs. en ISET(
                  Domingo García 47)
                </ListGroup.Item>
              </ListGroup>
            </article>
            <article className="col-lg-6 my-2 d-flex align-content-center justify-content-center">
              <img
                src="https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/2022-12/680772-ro06fo0118web-camila-20casero.jpg?itok=HRTDLgAM"
                alt=""
                className="w-100 rounded"
              />
            </article>
          </article>
        </section>
        <p className="text-center my-3 bg-light rounded py-2 shadow-sm">
          <cite>
            La presente actualización tiene como objetivo general promover
            instancias de desarrollo profesional y formación pedagógica, las
            cuales constituyen funciones primordiales del ISET. Esta propuesta
            prioriza el fortalecimiento de la práctica de enseñanza desde una
            perspectiva constructivista, tendiente a mejorar las condiciones y
            modos de trabajo de los distintos docentes de la educación en la
            modalidad técnico-profesional, potenciando la articulación de
            contenidos, estrategias y criterios de evaluación, fortaleciendo la
            continuidad de los aprendizajes. En este marco, otro aspecto que
            resulta relevante es el que representan las TIC como una fuente de
            influencia y generación de modelos, patrones sociales y valores que
            nos hacen necesariamente repensar los procesos en general y los de
            enseñanza y de aprendizaje en particular.
          </cite>
        </p>
        <ul class="list-group list-group-horizontal-xxl my-2 shadow-sm">
          <li class="list-group-item bg-primary text-center">ESPACIOS CURRICULARES</li>
          <li class="list-group-item">Módulo 1. Principios, derechos y reglamentaciones de la Educación Técnico Profesional.</li>
          <li class="list-group-item">Módulo 2. Las prácticas escolares de las Escuelas Técnicas</li>
          <li class="list-group-item">Módulo 3. La relación pedagógica y los procesos de enseñanza, aprendizaje y comunicación</li>
          <li class="list-group-item">Módulo 4. Las trayectorias escolares en el contexto de la Cultura Digital</li>
          <li class="list-group-item">Módulo 5. Las prácticas tutoriales: estrategias de acompañamiento y atención a la diversidad.</li>
          <li class="list-group-item">Módulo 6. Estrategias didácticas en el marco de la ETP: Diseño y elaboración de propuestas de intervención institucional</li>
          <li class="list-group-item">Módulo 7. Integrador (Modalidad de trabajo Taller): Análisis de propuestas institucionales de acompañamiento</li>
        </ul>
      </Container>
    </>
  );
};

export default Actualizacion;
