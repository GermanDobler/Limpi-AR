import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name='SignIn'
          component={SignIn}
          />
          <Stack.Screen 
          name='Home'
          component={Home}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}