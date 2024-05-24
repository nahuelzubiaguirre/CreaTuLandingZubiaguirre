/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Item ({producto}) {
    return(
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 2}).map((_, idx) => (
               <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={producto.images[0]} />
                        <Card.Body>
                        <Card.Title>{producto.title}</Card.Title>
                        <Card.Text>{producto.description}</Card.Text>
                        <Button variant="primary">add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Item;