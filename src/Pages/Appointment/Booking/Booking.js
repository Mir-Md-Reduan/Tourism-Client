import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const { bookingId } = useParams();
    const { user } = useAuth();
    const [dataF, setDataF] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(dataF => setDataF(dataF))
    }, []);

    const ExactData = dataF.filter(dat => dat._id.toString === bookingId);
    console.log(ExactData);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/booking', data)
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
            <p>
                {/* Name : {ExactData?.name} <br />
                price : {ExactData?.cost} <br />
                description : {ExactData?.description} */}
            </p>
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
    );
};


export default Booking;