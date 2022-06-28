import react, { Fragment } from "react"; import { Col, Row } from "react-bootstrap";
import { TextInput, Button, View } from "react-native";
import Cancel from "./Cancel";
import Guardar from "./Guardar";
import './styles/LoginForm.css';
import SvgFlechaizq from "./SvgFlechaizq";
import SvgPerfil from "./SvgPerfil";
export default function PersonalInfo() {
    return (
        <Fragment>
            <div className="fondo">
                <SvgFlechaizq></SvgFlechaizq>
                <Row className="contenedor">
                    <Col sm="5">
                    </Col>
                    <SvgPerfil className="perfil"></SvgPerfil>
                    <Row>
                        <label htmlFor="nombre">Nombre</label>
                        <TextInput placeholder="Maria" className="nombre" id="nombre" />
                    </Row>
                    <Row >
                        <label htmlFor="Apellido">Apellido</label>
                        <TextInput placeholder="Gonzales" className="apellido" id="apellido" />
                    </Row>
                    <Row >
                        <label htmlFor="dni">Dni</label>
                        <TextInput placeholder="Dni" className="Dni" id="Dni" />
                    </Row>
                    <Row >
                        <label htmlFor="contraseña">Contraseña</label>
                        <TextInput placeholder="contraseña" className="contraseña" id="contraseña" />
                    </Row>
                    <Row>
                        <Col>
                            <Cancel eliminar="Cerrar Sesion"></Cancel>
                        </Col>
                        <Col>
                            <Guardar guardar="Guardar Cambios"></Guardar>
                        </Col>
                    </Row>
                </Row>
            </div>
        </Fragment>
    )
}



