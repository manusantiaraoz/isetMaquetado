import { Container, Button } from "react-bootstrap";

const CardTecni = () => {
  return (
    <>
      <Container>
        <div className="text-center">
          <h3>Nuestras tecnicaturas Superiores</h3>
        </div>
        <article className="container containerSm">
          <div className="containerSm">
            <div className="card cardContentT my-3">
              <div className="d-flex flex-column cardms">
                <div className="imgCardSm ">
                  <img
                    src="https://img.freepik.com/vector-gratis/desarrollo-aplicaciones-escritorio-telefonos-inteligentes_23-2148683810.jpg?w=740&t=st=1710012468~exp=1710013068~hmac=870ece0321f5651d097588318a8241f9739aa60782055318f627cc9475a2754d"
                    className="tamanioImg my-2"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Tec. Sup. en Desarrollo de Software
                  </h5>
                  <p className="card-text">
                    El egresado en esta carrera posee conocimientos que le
                    posibilitará desempeñarse en distintas empresas y
                    organizaciones realizando tareas como: diagnosticos
                    optimizaciones, mantenimienstos y gestion de proyectos de
                    software.
                  </p>
                  <div className="text-end">
                  <Button href="https://iset-tuc.infd.edu.ar/sitio/tecnicaturas/tecnicatura-de-desarrollo-de-software/" target="_blank" type="button" className="mx-2  btn-info">más info</Button>
                  </div>
                </div>
              </div>
            </div>


            <div className="card cardContentT my-3">
              <div className="d-flex flex-column cardms">
                <div className="imgCardSm">
                  <img
                    src="https://img.freepik.com/vector-gratis/mano-robot-presiona-boton-engranaje-mecanico_1150-43060.jpg?t=st=1710012531~exp=1710016131~hmac=159dfd3d4f09001878bd5d8271e1320432e7fdb70fd7a006f5d2f1a3be2b2c30&w=740"
                    className="tamanioImg my-2"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Tec. Sup. en Automatización y Robótica Industrial
                  </h5>
                  <p className="card-text">
                    El egresado en esta carrera estará capacitado para proyectar
                    y diseñar; montar, operar y mantener instalaciones
                    destinadas a la automatización y control de equipos e
                    instalaciones.
                  </p>
                  <div className="text-end">
                  <Button href="https://iset-tuc.infd.edu.ar/sitio/tecnicaturas/tecnicatura-superior-en-automatizacion-y-robotica-industrial/" target="_blank" type="button" className="mx-2  btn-info">más info</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card cardContentT my-3">
              <div className="d-flex flex-column cardms">
                <div className="imgCardSm ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2ViIBbuXPro9O4n5AnYHNv3uJ9AzQudRGA&usqp=CAU"
                    className="tamanioImg my-2"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Tec. Sup. en Gestión Ambiental</h5>
                  <p className="card-text text-center">
                    El egresado de esta carrera contará con sólidos
                    conocimientos científicos, técnicos y humanísticos, que le
                    posibilitaran desempeñarse con idoneidad y compromiso ético
                    y social, en los diferentes ámbitos relacionados al cuidado,
                    preservación y recuperación del medio ambiente
                  </p>
                <div className="text-end">
                  <Button href="https://iset-tuc.infd.edu.ar/sitio/tecnicaturas/tec-sup-en-gestion-ambiental/" target="_blank" type="button" className="mx-2  btn-info">más info</Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </>
  );
};

export default CardTecni;
