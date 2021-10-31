import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Admin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://grim-asylum-43912.herokuapp.com/admin', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("added Successfully");
                    reset();
                }
            })
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="left-side">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ExactData[0]?.img} />
                                <Card.Body>
                                    <Card.Title>Tour Spot Name : {ExactData[0]?.name}</Card.Title>
                                    <Card.Text>
                                        {ExactData[0]?.description}
                                    </Card.Text>
                                    <h3>Tour price per Person : ${ExactData[0]?.price} </h3>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="right-side">
                            <div className="booking-details">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                                    <textarea {...register("description")} placeholder="description" />
                                    <input type="number" {...register("price")} placeholder="price" />
                                    <input {...register("img")} placeholder="imag url" />
                                    <input type="submit" />
                                </form>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;