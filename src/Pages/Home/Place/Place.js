import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = ({ place }) => {
    const { name, img, description, _id } = place;
    return (
        <div className="col-lg-4 col-md-6">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                    <Link to={`/appointment/${_id}`}>
                        <Button variant="warning">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Place;