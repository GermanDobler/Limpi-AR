import react, { Fragment, useState } from "react";
import { View, Button } from "react-native-web";
import './styles/ImageDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ImageDisplay(props) {
    const [archivos, setArchivos] = useState(null);
    const subirArchivo = e => {
        setArchivos(e);
    }

    return (

        <View>
            <div className="fondo">
                <div className="ImageDisplay">
                    <Row className="top">
                        <Col sm="3" className="Col1">
                            <Col className="container" sm="2">
                                {/* poner muñeco perfil */}
                            </Col>
                        </Col>
                        <Col sm="1">
                        </Col>
                        <Col sm="8">
                            <Row>
                                <Col sm="5" className="col">
                                    <input className="btn btn-primary cargar" type="file" name="files" onChange={() => subirArchivo(e.target.files)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="5" className="col">
                                    <Button className="cargar" title="Cargar Imagen" onPress={() => console.log("Enviar")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="5" className="col">
                                    <Button className="borrar" title="Borrar Imagen" onPress={() => console.log("Enviar")} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </View >

    );
}
