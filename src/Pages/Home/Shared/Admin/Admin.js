import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import Place from '../../Place/Place';

const Admin = () => {

    // const { isLoading } = useAuth();
    // const [dataF, setDataF] = useState([]);
    // useEffect(() => {
    //     fetch('https://grim-asylum-43912.herokuapp.com/admin')
    //         .then(res => res.json())
    //         .then(dataF => setDataF(dataF))
    // }, [isLoading]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addTourSpot', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        // })
        //         .then(res => {
        //     if (res.data.insertedId) {
        //         alert("added Successfully");
        //         reset();
        //     }
        // })
    };
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col>
                        <div className="left-side my-5">
                            <Card style={{ width: '18rem' }}>
                                <h2>List of All Booking Tourist Spot</h2>
                                {/* {
                                    dataF.map(place => <Place
                                        key={place._id}
                                        place={place}></Place>)
                                } */}
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="right-side my-5">
                            <div className="booking-details">
                                <h4 className="my-5">Add Tourist Spot</h4>
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