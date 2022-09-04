import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../screens/ScreenHome';
import ScreenLogIn from '../screens/ScreenLogIn';
import ScreenSecretaria from '../screens/ScreenSecretaria';
import ScreenPerfil from '../screens/ScreenPerfil';
import ScreenSector from '../screens/ScreenSector';

const Stack = createNativeStackNavigator();
//Si user == "Secretario" ver ciertas pantallas()
export default function StackScreen() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name='ScreenLogIn'
          component={ScreenLogIn}
          />
          <Stack.Screen 
          name='ScreenHome'
          component={ScreenHome}
          />
          <Stack.Screen 
          name='ScreenSecretaria'
          component={ScreenSecretaria}
          />
          <Stack.Screen 
          name='ScreenPerfil'
          component={ScreenPerfil}
          />
          <Stack.Screen 
          name='ScreenSector'
          component={ScreenSector}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}