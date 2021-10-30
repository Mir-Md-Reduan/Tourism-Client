import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = ({ place }) => {
    const { name, img, service, cost, id } = place;
    return (
        <div className="col-lg-4 col-md-6">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Speciality: {service} <br />
                        Consultation Fee: ${cost}
                    </Card.Text>
                    <Link to={`/appointment/${id}`}>
                        <Button variant="warning">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Place;