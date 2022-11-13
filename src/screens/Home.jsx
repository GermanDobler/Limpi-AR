import React from 'react';
import { useAuth } from '../context/AuthContext';
import Porteros from './Porteros';
import Secretaria from './Secretaria';
export default function Home() {
    const { user } = useAuth();

    if (user.email == 'secretaria.epet20@gmail.com') {
        return <Secretaria/>
    } else {
        return <Porteros/>
    }
}
