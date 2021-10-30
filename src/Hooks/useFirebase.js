import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeFirebaseAuthentication from "../Pages/Home/Shared/Login/Firebase/Firebase.init";
initailizeFirebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        // setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .finally(() => setIsLoading(false));
    }


    // Obserb User State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            setError("password must be at least 6 characters");
            return;
        } else {
            setPassword(e.target.value);
        }
    };

    const handleUserRegister = (email, password) => {
        // e.preventDefault();
        // setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     setUser(result.user);
        // })
        // .finally(() => setIsLoading(false));
    };

    const handleUserLogin = (email, password) => {
        // e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     setUser(result.user);
        // })
        // .catch((error) => setError(error.message))
    };


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        handleUserRegister,
        handleUserLogin,
        handleEmailChange,
        error,
        handlePasswordChange
    }
}
export default useFirebase;