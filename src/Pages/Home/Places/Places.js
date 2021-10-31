import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';



const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://grim-asylum-43912.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className="my-5" id="places">
            <h1 className="my-5">Our Tour Spots</h1>
            <div className="container">
                <div className="row gy-3">
                    {
                        places.map(place => <Place
                            key={place._id}
                            place={place}></Place>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Places;