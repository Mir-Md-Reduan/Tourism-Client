import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Booking = () => {
    const { bookingId } = useParams();
    const { user, isLoading } = useAuth();
    const [dataF, setDataF] = useState([]);
    useEffect(() => {
        fetch('https://grim-asylum-43912.herokuapp.com/places')
            .then(res => res.json())
            .then(dataF => setDataF(dataF))
    }, [isLoading]);

    const ExactData = dataF.filter(dat => dat._id === bookingId);
    // console.log(ExactData[0].name);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://grim-asylum-43912.herokuapp.com/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("added Successfully");
                    reset();
                }
            })
    };

    return (
        <div className="my-5 ">
            <h1>Booking Details </h1>
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


export default Booking;