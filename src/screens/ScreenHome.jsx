import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { useAuth } from '../context/AuthContext';
import StyleContext from '../context/GlobalStyles';

export default function ScreenHome({ navigation }) {
  const { style } = useContext(StyleContext);
  const { logout, user, loading } = useAuth();
  
  const handleLogout = async () => {
    await logout()
  }

  if (!user) return navigation.navigate('ScreenLogin')

  return (
    <View style={style.container}>
      <p>{user.email}</p>
      <button onClick={handleLogout}>logout</button>
    </View>
  )
}
