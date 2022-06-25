import react, { useState, Fragment } from "react";
import { View, } from "react-native-web";
import SvgFlechaizq from "./SvgFlechaizq";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ImageDisplay.css';
import SectorDisplay from "./SectorDisplay";
import { Row, Col } from 'react-bootstrap'

export default function AsignarSector(props) {
    return (

        <div className="fondo">
            
            <View>
            <SvgFlechaizq></SvgFlechaizq>
                <Row>
                    <Col>
                        <h1 className="centrar"> AsignarSector</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <Col sm="5">
                            </Col>
                            <Col sm="5">
                                <SectorDisplay nombre_Sector="Sector 1 " sm="5" />
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                            </Col>
                            <Col sm="5" >
                            <SectorDisplay nombre_Sector="Sector 2 "  />
                            <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                            </Col>
                            <Col sm="5" >
                            <SectorDisplay nombre_Sector="Sector 3 "  />
                            <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                            </Col>
                            <Col sm="5" >
                            <SectorDisplay nombre_Sector="Sector 4 "  />
                            <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                            </Col>
                            <Col sm="5" >
                            <SectorDisplay nombre_Sector="Sector 5 (Opcional) "  />
                            <br />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br /><br />
            </View>
        </div>
    )
}