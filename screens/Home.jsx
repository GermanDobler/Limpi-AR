import * as React from 'react';
import { Button, View} from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="Go to Maradona"
        onPress={() => navigation.navigate('SignIn')} //Botón el cual nos envia a la pantalla prueba
      />
    </View>
  );
}
