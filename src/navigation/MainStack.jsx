import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PersonalInfo from '../components/PersonalInfo'

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        < Stack.Screen 
        name='PersonalInfo'
        component = {PersonalInfo}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}