import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const { appointmentId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const ExactData = data.filter(dat => dat.id.toString === appointmentId);
    console.log(ExactData);

    return (
        <div className="my-5">
            <h1>This is service Detail Page </h1>
            <p>
                Name : {ExactData?.name} <br />
                price : {ExactData?.cost} <br />
                description : {ExactData?.description}
            </p>
        </div>
    );
};


export default Appointment;