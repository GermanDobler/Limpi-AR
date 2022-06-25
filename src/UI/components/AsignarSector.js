import react, { useState } from "react";
import { View } from "react-native-web";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ImageDisplay.css';
import SectorDisplay from "./SectorDisplay";
import { Row, Col } from 'react-bootstrap'

export default function AsignarSector(props) {
    return (
        <div className="fondo">
            <View>
                <Row>
                    <Col>
                        <SectorDisplay nombre_Sector="Sector 1 " />
                        <br /><br />
                        <SectorDisplay nombre_Sector="Sector 2 " />
                        <br /><br />
                        <SectorDisplay nombre_Sector="Sector 3 " />
                        <br /><br />
                        <SectorDisplay nombre_Sector="Sector 4 " />
                        <br /><br />
                        <SectorDisplay nombre_Sector="Sector 5 (Opcional)" />
                        <br /><br /><br />
                    </Col>
                </Row>
            </View>
        </div>
    )
}