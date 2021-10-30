import { Button } from 'react-bootstrap';
import useAuth from '../../../../../Hooks/useAuth';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';


const Login = () => {

    const { signInUsingGoogle, setUser, setIsLoading, handleEmailChange, handlePasswordChange, user, handleUserLogin } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || "/home";

    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        handleUserLogin(handleEmailChange, handlePasswordChange)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div className="login-box d-flex align-items-center justify-content-center my-2 py-3">
            <div className="login">
                <div className="login-box">
                    <h2 className="text-success">Please Login</h2>
                    <p className="text-danger">{user.error}</p>
                    <form onSubmit={handleLoginWithEmailAndPassword}>
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

                        <input
                            className="mt-3 w-50 btn btn-success m-auto"
                            type="submit"
                            value="Login"
                        />
                        <br />

                    </form>
                    <div className="d-flex flex-wrap me-1  ">
                        <Button onClick={handleGoogleLogin} className="mt-2 mx-auto text-warning w-75 " >
                            Login with Google
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;