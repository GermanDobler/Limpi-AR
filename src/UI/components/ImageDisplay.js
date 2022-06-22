import react, { Fragment } from "react";
import { View } from "react-native-web";
export default function ImageDisplay() {
    return (
        <View>
            <h2>Cargar Imagen</h2>
            <Form>
            <input id="ficheros" type="file" name="file"  accept=".jpg,.gif,.png"/><br/>
            </Form>
        </View>
    );
}