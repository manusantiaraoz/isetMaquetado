import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <section className="mainSection text-center">
        <img src="https://vueltaymediabcn.com/wp-content/uploads/2023/06/error-404-que-son-prncipal.jpg" className='w-25' alt="error 404" />
        <div>
        <Button variant="primary" type='button' as={Link} to="/" >Volver al inicio</Button>

        </div>
    </section>
    );
};

export default Error404;