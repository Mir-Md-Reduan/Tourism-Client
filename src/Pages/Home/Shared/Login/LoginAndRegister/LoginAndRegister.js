import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import loginIcon from '../../../../../Images/Login.jpg'

const LoginAndRegister = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <div className="App container my-5 p-3">
                <div className="row">
                    <div className="login-area col-md-8 text-center">
                        {toggle ? <Login></Login> : <Register></Register>}

                        {toggle ? (
                            <h4 onClick={() => setToggle(false)} className="text-success">
                                are you new ? please register
                            </h4>
                        ) : (
                            <h4 onClick={() => setToggle(true)} className="text-success">
                                already have an account ?
                            </h4>
                        )}
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="img my-5">
                            <img
                                className="image-fluid w-100"
                                src={loginIcon}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAndRegister;