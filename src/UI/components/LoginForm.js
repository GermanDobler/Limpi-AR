//Siempre deben de importar la estructura de react
import react, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
//Este import genera la transición a los react
import { TextInput, Button, View } from "react-native";
import './styles/LoginForm.css';
export default function LoginForm() {
    return (
        <Fragment>
            <div className="fondo">
                <img src={require('./logo.png')} className="img" />
                <Row className="contenedor">
                    <Row >
                        <label htmlFor="dni">DNI</label>
                        <TextInput placeholder="43.234.234" className="input" id="dni" />
                    </Row>
                    <Row >
                        <label htmlFor="contrasenia">Contraseña</label>
                        <TextInput placeholder="*******" className="input" id="contrasenia" />
                    </Row>
                    <Row>
                        <Col>
                            {/* <Cancel></Cancel> */}
                        </Col>
                        <Col>
                            {/* <Guardar registrar="Registar Usuario"></Guardar> */}
                        </Col>
                    </Row>
                </Row>
            </div>
        </Fragment>
    )
}


