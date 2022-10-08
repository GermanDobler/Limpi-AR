import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { useAuth } from '../context/AuthContext';
import StyleContext from '../context/GlobalStyles';

export default function ScreenHome({ navigation }) {
  const { style } = useContext(StyleContext);
  const { logout, user, loading } = useAuth();

  const handleLogout = async () => {
    navigation.navigate('ScreenLogin')
    await logout();
  }
  return (
    <View style={style.container}>
      <div>
      <p>{user.email}</p>
      <button onClick={handleLogout}>logout</button>
      </div>
    </View>
  )

}
