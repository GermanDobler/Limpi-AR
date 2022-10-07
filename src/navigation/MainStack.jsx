import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../screens/ScreenHome';
import { StyleProvider } from '../context/GlobalStyles';
import ScreenLogin from '../screens/ScreenLogin';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <StyleProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name='ScreenSigIn'
            component={ScreenLogin}
          />
          <Stack.Screen
            name='ScreenHome'
            component={ScreenHome}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
} 