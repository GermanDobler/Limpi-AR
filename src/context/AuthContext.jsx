import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from 'firebase/auth';
import { auth } from '../db/database';
const authContext = createContext();
/*Usar el context*/
export const useAuth = () => {
    const contextAuth = useContext(authContext);
    if (!contextAuth) throw new Error("No esta autenticado");
    return contextAuth;
}
/*Usar el context*/

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorType, setErrorType] = useState('');

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        console.log(provider);
        // return signInWithRedirect(auth, provider);
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);//setea valores del usuario
            setLoading(false);//setea en falso el loading
        })
        return () => unsub();
    }, [])

    const getError = (error) => {//función para devolver los tipos errores
        console.log(error.code)
        switch(error.code){
        case 'auth/invalid-email':
            setErrorType('Correo electrónico invalido');
            break;
        case 'auth/internal-error':
            setErrorType('No ingresó contraseña');
            break;
        case 'auth/weak-password':
            setErrorType('Contraseña muy corta');
            break;
        case 'auth/user-not-found':
            setErrorType('El usuario no existe/Registrate');
            break;
        case "auth/wrong-password":
            setErrorType('Contraseña incorrecta');
            break;
        case "auth/too-many-requests":
            setErrorType('Demasiados intentos, intente más tarde');
            break;
        case "auth/email-already-in-use":
            setErrorType('Email en uso');
            break;
        case "":
            setErrorType("");
            break;
        default:
            setErrorType('Error desconocido');
            break;
        }
    }

    const data = { signup, login, 
        logout, user, loading, 
        getError, errorType, 
        loginWithGoogle
    }
    return (
        <authContext.Provider value={data}>{children}</authContext.Provider>
    )
}
export { AuthProvider };
export default authContext;