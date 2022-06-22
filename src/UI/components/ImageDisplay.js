import react, { Fragment, useState } from "react";
import { View, Button } from "react-native-web";
import './styles/ImageDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ImageDisplay() {
    const [archivos, setArchivos] = useState(null);
    const subirArchivo = e => {
        setArchivos(e);
    }

    return (
        <div className="ImageDisplay">
            <br /> <br />
            <input className="btn btn-primary" type="file" name="files" onChange={() => subirArchivo(e.target.files)} />
            <Button className="cargar" title="Cargar Imagen" onPress={() => console.log("Enviar")} />
            <Button title="Borrar Imagen" onPress={() => console.log("Enviar")} />
        </div>

    );
}
