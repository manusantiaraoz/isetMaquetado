import {Carousel} from "react-bootstrap";
import { useState } from 'react';
import CardTecni from "./CardTecni";
import ActDocente from "./ActDocente";
import BlogFrame from "./BlogFrame";
import Insc from "./insc";
import Cap2024 from "./Cap2024";



const Inicio = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="mainSection bgMainColor">
      <article className=" d-flex justify-content-around bg-ligth px-3 my-5 resInicio">
      <section className="align-self-center">
        <h1 className=" text-dark fontMona text-center">BIENVENIDOS AL ISET-TUCUMÁN</h1>
      </section>
      <section className="d-flex justify-content-center shadow-sm mt-3 mb-3" >
      <Carousel activeIndex={index} onSelect={handleSelect}  slide={false}>
      <Carousel.Item>
        <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2023/10/slide0-3-1100x600.png" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2023/10/slide2-2-1100x600.png" alt="" className="imgSlaider"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2023/10/slide3-1-1100x600.png" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2023/10/slide4-1100x600.png" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2023/10/slide5-1-1100x600.png" alt="" className="imgSlaider" />
      </Carousel.Item>
    </Carousel>
      </section>
      </article>
      <article className="my-5 shadow-sm">
      <Insc></Insc>
      </article>
      <article className="my-2 shadow-sm">
      <CardTecni></CardTecni>
      </article>
      <article className="my-2 shadow-sm">
      <Cap2024></Cap2024>
      </article>
      <article className="my-5 shadow-sm">
      <ActDocente></ActDocente>
      </article>
      <article className="my-5 shadow-sm">
      <BlogFrame></BlogFrame>
      </article>

    </section>
  );
};

export default Inicio;
