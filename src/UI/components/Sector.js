import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './styles/Sector.css'
import Flecha from './SvgFlecha'

export default function Sector(props) {
    return (
        <div className="content">
            <View>
                <Row>
                    <Col sm="2">
                        imagen
                    </Col>
                    <Col sm="8">
                        {/* Con este props cambia la clase segun el estado (limpio/sucio) */}
                        <Row className={props.estado}>
                            <Col sm="9" className="sector">
                                {props.nombre}
                            </Col>
                            <Col sm="1" className="fecha">
                                <Flecha></Flecha>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </View>
        </div>
    )
}
