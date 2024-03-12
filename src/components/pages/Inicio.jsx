import {Carousel} from "react-bootstrap";
import { useState } from 'react';
import CardTecni from "./CardTecni";
import ActDocente from "./ActDocente";
import BlogFrame from "./BlogFrame";




const Inicio = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="mainSection bgMainColor ">
      <article className="d-flex justify-content-center shadow-sm mt-3 mb-3" >
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
      </article>
      <article className="my-3 shadow-sm">
      <CardTecni></CardTecni>
      </article>
      <article className="my-3 shadow-sm">
      <ActDocente></ActDocente>
      </article>
      <article className="my-3 shadow-sm">
      <BlogFrame></BlogFrame>
      </article>

    </section>
  );
};

export default Inicio;
