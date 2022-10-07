import React, { useContext } from 'react'
import { View } from 'react-native'
import StyleContext from '../context/GlobalStyles';

export default function ScreenHome() {
const { style } = useContext(StyleContext);
  return (
    <View style={style.container}>
        hola
    </View>
  )
}
