//Siempre deben de importar la estructura de react
import react from "react";
//Este import genera la transición a los react
import { TextInput, Button, View } from "react-native";
import './styles/LoginForm.css';
export default function LoginForm() {
    return (
        <div className="fondo">
                <img src={require('./logo.png')} className="img" />
            <div className="contenedor_form">
                <View>
                    <label htmlFor="dni">
                        DNI
                    </label>
                    <TextInput placeholder="43.234.234" className="input" id="dni" />
                        <br />
                    <label htmlFor="contrasenia">
                        Contraseña
                    </label>
                    <TextInput placeholder="*******" className="input" id="contrasenia" />
                        <br />
                    <Button title="Aceptar" onPress={() => console.log("Enviar")} />
                        <br />
                    <Button title="Cancelar" onPress={() => console.log("Cancelar")} />
                </View>
            </div>
        </div>
    )
}


