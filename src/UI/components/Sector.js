import { StyleSheet, Button, View } from 'react-native'
import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import './styles/Sector.css'
import Flecha from './SvgFlecha'
import { render } from 'react-dom'

export default function Sector(props) {
    return (
        <Fragment>
            <div className="content">
                <Row>
                    <Col sm="2">
                        imagen
                    </Col>
                    <Col sm="9">
                        {/* Con este props cambia la clase segun el estado (limpio/sucio) */}
                        <Row className={props.estado}>
                            <Col sm="8" className="sector">
                                {props.nombre}
                            </Col>
                            <Col sm="1">
                            </Col>
                            <Col sm="3" className="fecha">
                                <Flecha></Flecha>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
