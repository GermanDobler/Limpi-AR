import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../screens/ScreenHome';
import ScreenLogIn from '../screens/ScreenLogIn';
import ScreenSecretaria from '../screens/ScreenSecretaria';
import ScreenPerfil from '../screens/ScreenPerfil';
import ScreenSector from '../screens/ScreenSector';
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Stack = createNativeStackNavigator();
//Si user == "Secretario" ver ciertas pantallas()

export default function StackScreen() {
  const isAuthenticated = useAuth0().isAuthenticated;
  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <Auth0Provider domain='limpi-ar.us.auth0.com'
          clientId='hXGGWtPNGHTkotavIkwcgoiKrkn0u9E6'
          redirectUri={window.location.origin}>
          <Stack.Navigator>
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
        </Auth0Provider>
      </NavigationContainer>
    );
  } else if (!isAuthenticated) {
    return (
      <NavigationContainer>
        <Auth0Provider domain='limpi-ar.us.auth0.com'
          clientId='hXGGWtPNGHTkotavIkwcgoiKrkn0u9E6'
          redirectUri={window.location.origin}>
          <Stack.Navigator>
            <Stack.Screen
              name='ScreenLogIn'
              component={ScreenLogIn}
            />
          </Stack.Navigator>
        </Auth0Provider>
      </NavigationContainer>
    );
  }
}