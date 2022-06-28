//Siempre deben de importar la estructura de react
import react, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
//Este import genera la transición a los react
import { Button } from "@material-ui/core";
import { TextInput} from "react-native";
import './styles/LoginForm.css';
export default function LoginForm() {
    return (
        <Fragment>
            <div className="fondo">
                <Row>
                </Row>
            
                <img src={require('./logo.png')} className="img" />
                <Row className="contenedor-row">
                    <Row className="contenedor">
                        <TextInput placeholder="DNI -Sin Puntos-" className="input" id="dni" />
                    </Row>
                    <Row className="contenedor">
                        <TextInput placeholder="Contraseña" className="input" id="contrasenia" />
                    </Row>
                    <Row>
                        <Col>
                            <Button className="btn_signin" variant="contained">
                                <span>Iniciar Sesión</span>
                            </Button>
                        </Col>
                        <Col>
                        <Button className="btn_register" variant="contained">
                                <span>Registrarse</span>
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </div>
        </Fragment>
    )
}


