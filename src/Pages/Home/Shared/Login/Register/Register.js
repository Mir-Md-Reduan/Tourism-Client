import React from 'react';
import './Register.css';
import useAuth from '../../../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const Register = () => {
    const { handleEmailChange, handlePasswordChange, handleUserRegister, setIsLoading, setUser } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const handleRegistration = (e) => {
        e.preventDefault();
        handleUserRegister(handleEmailChange, handlePasswordChange)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div>
            <div className="login-box d-flex align-items-center justify-content-center my-5 py-3">
                <div className="login">
                    <div className="login-box">
                        <h2 className="text-success">Please Register</h2>
                        <br />
                        <form onSubmit={handleRegistration} >
                            <input
                                onChange={handleEmailChange}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                required
                            />
                            <br />
                            <br />
                            <input
                                onChange={handlePasswordChange}
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                required
                            />
                            <br />
                            <br />
                            <input
                                className="mt-3 w-50 btn btn-success m-auto"
                                type="submit"
                                value="Register"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;