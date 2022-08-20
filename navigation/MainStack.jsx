import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import LogIn from '../screens/LogIn';

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name='SignIn'
          component={LogIn}
          />
          <Stack.Screen 
          name='Home'
          component={Home}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}