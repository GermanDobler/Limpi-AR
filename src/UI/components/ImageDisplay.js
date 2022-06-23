import react, { Fragment, useState } from "react";
import { View, Button } from "react-native-web";
import './styles/ImageDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SvgPerfil from "./SvgPerfil";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonEditar from "./ButtonEditar";

export default function ImageDisplay(props) {
    const [archivos, setArchivos] = useState(null);
    const subirArchivo = e => {
        setArchivos(e);
    }

    return (
        <View>
            <Row>
            <Col sm="5">
            <ButtonEditar nombre="Editar Sector"/>
            </Col>
            <Col>
            <ButtonEditar nombre="Editar Datos" />    
                </Col>
            </Row>
            <div className="ImageDisplay">
                <Row >
                <Col className="container" sm="2">
                    <SvgPerfil className="SvgPerfil" />
                </Col>
                    <Col sm="8" >
                        <br /> <br />
                        <input className="btn btn-primary" type="file" name="files" onChange={() => subirArchivo(e.target.files)} />
                    </Col>
                </Row>
                <Row >
                    <Col sm="5">
                        <Button className="cargar" title="Cargar Imagen" onPress={() => console.log("Enviar")} />
                    </Col>
                    <Col sm="5">
                        <Button title="Borrar Imagen" onPress={() => console.log("Enviar")} />
                    </Col>
                </Row>
            </div>
        </View >
    );
}
