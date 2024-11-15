import React from 'react';
import {Carousel} from "react-bootstrap";
import { useState } from 'react';

const Cap2024 = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <>
             <section className="d-flex justify-content-center shadow-sm bg-ligth" >
      <Carousel activeIndex={index} onSelect={handleSelect}  slide={false} className='my-2'>
      <Carousel.Item>
        <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2024/06/1-1100x600.jpg" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2024/06/2-1100x600.jpg" alt="" className="imgSlaider"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2024/06/3-1100x600.jpg" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2024/06/4-1100x600.jpg" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2024/06/5-1100x600.jpg" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2024/06/6-1100x600.jpg" alt="" className="imgSlaider" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2024/06/7-1100x600.jpg" alt="" className="imgSlaider" />
      </Carousel.Item>
      
    </Carousel>
      </section>
        </>
    );
};

export default Cap2024;