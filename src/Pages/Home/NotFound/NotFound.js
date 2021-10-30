import React from 'react';
import { Link } from 'react-router-dom';
import icon404 from '../../../Images/img-404.jpg'


const NotFound = () => {
    return (
        <div className="notFound">
            <img src={icon404} alt="" />
            <Link to='/home'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;