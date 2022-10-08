import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
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
    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);//setea valores del usuario
            setLoading(false);//setea en falso el loading
        })
        return () => unsub();
    }, [])

    const data = { signup, login, logout, user, loading }
    return (
        <authContext.Provider value={data}>{children}</authContext.Provider>
    )
}
export { AuthProvider };
export default authContext;