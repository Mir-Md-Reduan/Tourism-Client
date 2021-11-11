import React from 'react';
import { useEffect, useState } from "react";
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
    const [booking, setBooking] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [control]);
    console.log(booking);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('Booking Is Deleted Successfully')
                }
            });
        console.log(id);
    };
    return (
        <div className="mt-5">
            <h1 className="my-3">My orders </h1>
            <div className="booking">
                <div className="row container">
                    {booking?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="booking-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>
                                <h6>{pd?.Name}</h6>
                                <p>{pd?.date}</p>
                                <h3 className="text-danger"> Cost :{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MyOrder;