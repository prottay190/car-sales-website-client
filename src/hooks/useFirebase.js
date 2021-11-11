import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] =useState('');

    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                //send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // ...
                  }).catch((error) => {
                    // ...
                  });
                // ...
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/purchase';
                history.replace(destination)
                // Signed in 
                const user = userCredential.user;
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //Observer user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    //sing Out

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setLoading(false));
    }

    return {
        user,
        registerUser,
        loading,
        authError,
        loginUser,
        logOut,
    }
}

export default useFirebase;