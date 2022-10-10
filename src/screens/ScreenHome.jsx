import React from 'react';
import { View } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function ScreenHome({ navigation }) {
  const { logout, user, loading } = useAuth();

  const handleLogout = async () => {
    navigation.navigate('ScreenLogin')
    await logout();
  }
  // console.log(user)
  return (
    <View>
      <div>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />
      <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </View>
  )

}
