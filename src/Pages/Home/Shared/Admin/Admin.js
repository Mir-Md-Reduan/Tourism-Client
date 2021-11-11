import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';


const Admin = () => {

    const { isLoading } = useAuth();
    const [dataF, setDataF] = useState([]);
    const [places, setPlaces] = useState([]);
    const [control, setControl] = useState(false);
    const status = "approved";



    const handleUpdate = (id) => {
        fetch(`https://grim-asylum-43912.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };
    useEffect(() => {
        fetch('https://grim-asylum-43912.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setDataF(data))
    }, [control]);



    useEffect(() => {
        fetch('https://grim-asylum-43912.herokuapp.com/places')
            .then(res => res.json())
            .then(dataF => setPlaces(dataF))
    }, [control]);
    console.log(places);

    const handleDelete = (id) => {
        fetch(`https://grim-asylum-43912.herokuapp.com/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('Booking Is Deleted Successfully');
                }
            });
        console.log(id);
    };

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://grim-asylum-43912.herokuapp.com/addTourSpot', {

            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        alert('Tourist Spot added successfully');
        reset();
        // })
        //         .then(res => {

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
                                <div className="container">
                                    <div className="row gy-3">
                                        {

                                            dataF?.map((pd) => (
                                                <div className="col-md-12">
                                                    <div className="service border border p-3">
                                                        <div className="services-img ">
                                                            <img className="w-100" src={pd?.image} alt="" />
                                                        </div>

                                                        <h6>{pd?.Name}</h6>
                                                        <Button
                                                            onClick={() => handleUpdate(pd._id)} >{pd?.status}</Button>
                                                        <p>{pd?.email}</p>
                                                        <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="left-side my-5">
                            <Card style={{ width: '18rem' }}>
                                <h2>List of All Tourist Spot</h2>
                                <div className="container">
                                    <div className="row gy-3">
                                        {

                                            places?.map((pd) => (
                                                <div className="col-md-12">
                                                    <div className="service border border p-3">
                                                        <div className="services-img ">
                                                            <img className="w-100" src={pd?.img} alt="" />
                                                        </div>

                                                        <h6>{pd?.name}</h6>
                                                        <Button onClick={() => handleDelete(pd?._id)}>Delete</Button>
                                                        <p>{pd?.email}</p>
                                                        <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
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