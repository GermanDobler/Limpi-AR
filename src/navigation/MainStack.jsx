import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../screens/ScreenHome';
import ScreenLogin from '../screens/ScreenLogin/ScreenLogin';
import ScreenSignin from '../screens/ScreenSignin';
import { StyleProvider, useStyles } from '../context/GlobalStyles';
import { View } from 'react-native';
import { AuthProvider } from '../context/AuthContext';
const Stack = createNativeStackNavigator();

function Screens() {
  const { style } = useStyles();
  return (
    <View style={style.mainContainer}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='ScreenLogin'
              component={ScreenLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ScreenSignin'
              component={ScreenSignin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ScreenHome'
              component={ScreenHome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
};

export default function MainStack() {
  return (
    <StyleProvider>
      <Screens></Screens>
    </StyleProvider>
  );
}
