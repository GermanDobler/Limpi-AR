import React from 'react'
import { useAuth } from './context/AuthContext'

export default function ProtectedNavigation({children, navigation}) {
    const { user, loading } = useAuth();

    if(loading) return <p>Loading</p>

    if(!user) {navigation.navigate('ScreenLogin')}

    return <>{children}</>
  
}

