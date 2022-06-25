import react, { useState } from "react";
import { View } from "react-native-web";
import './styles/ImageDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectorDisplay from "./SectorDisplay";
import { Row, Col } from 'react-bootstrap'

export default function AsignarSector(props) {
    return (
        <div className="background">
         <View>
         <Row>
         <Col>
         <SectorDisplay nombre_Sector="Sector 1 "/>
         </Col>
         <Col>
         <SectorDisplay nombre_Sector="Sector 2 "/>
         </Col>
         <Col>
         <SectorDisplay nombre_Sector="Sector 3 "/>
         </Col>
         <Col>
         <SectorDisplay nombre_Sector="Sector 4 "/>
         </Col>
         <Col>
         <SectorDisplay nombre_Sector="Sector 5 (Opcional)" />
         </Col>
         </Row>

         </View>
            </div>
    )
}