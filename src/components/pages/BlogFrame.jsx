import { Container} from "react-bootstrap";



const BlogFrame = () => {
 
    return (
        < article>
        <h3 className="text-center"> informate en nuestro blog</h3>
        <Container className="d-flex justify-content-center">
        <iframe src="https://iset-tuc.infd.edu.ar/sitio/blog/" frameborder="0" className="frameStyle"></iframe>
        </Container>
            
        </article>
    );
};

export default BlogFrame;