import { StyleSheet, Button, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { Row, Col, Accordion } from 'react-bootstrap'
import './styles/Sector.css'
import Flecha from './SvgFlecha'
import { render } from 'react-dom'
import Guardar from './Guardar'

export default function Sector(props) {

        return (
            <Fragment>
                <div className="content">
                    <Accordion defaultActiveKey={0} >
                        <Accordion.Item eventKey='0' className={props.estado}>
                            <Accordion.Header>
                            <Row className="sector">
                                {props.nombre}
                            </Row>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    
                                    <Guardar guardar="Cambiar estado"></Guardar>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Fragment>
        )
    }

