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
    const email = user.email;
    const status = "pending";
    useEffect(() => {
        fetch(`https://grim-asylum-43912.herokuapp.com/singleplace/${bookingId}`)
            .then(res => res.json())
            .then(dataF => setDataF(dataF))
    }, [isLoading]);
    console.log(dataF);


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = "pending";
        data.email = email;
        data.status = status;
        console.log(data)
        fetch('https://grim-asylum-43912.herokuapp.com/booking', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('booking is successful');

    };

    return (
        <div className="my-5 ">
            <h1>Booking Details </h1>
            <Container>
                <Row>
                    <Col>
                        <div className="left-side">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={dataF?.img} />
                                <Card.Body>
                                    <Card.Title>Tour Spot Name : {dataF?.name}</Card.Title>
                                    <Card.Text>
                                        {dataF?.description}
                                    </Card.Text>
                                    <h3>Tour price per Person : ${dataF?.price} </h3>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="right-side">
                            <div className="booking-details">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("Name", { required: true })}
                                        value={dataF?.name}
                                        className="p-2 m-2 w-75" />
                                    <br />
                                    <input
                                        {...register("date")}
                                        type="date"
                                        className="p-2 m-2 w-75"
                                    />
                                    <br />
                                    <input
                                        {...register("comments")}
                                        placeholder="comments"
                                        className="p-2 m-2 w-75"
                                    />
                                    <br />
                                    <input
                                        {...register("price", { required: true })}
                                        value={dataF?.price}
                                        className="p-2 m-2 w-75"
                                    />
                                    <br />
                                    <input
                                        {...register("image", { required: true })}
                                        value={dataF?.img}
                                        className="p-2 m-2 w-75"
                                    />
                                    <br />
                                    <input
                                        type="submit"
                                        value="Order Now"
                                        className="btn btn-warning w-50"
                                    />
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