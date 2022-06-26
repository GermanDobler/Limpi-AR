import "./styles/CancelSubmit.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fragment } from "react";
import { Button } from "@material-ui/core";
import SvgGuardar from "./SvgGuardar";
import SvgCancel from "./SvgCancel";

function CancelSubmit() {
  return (
    <Fragment>
      <Row className="row">
        <Col className="col_cancel" sm="6">
          <Button className="btn_cancel" variant="contained">
            <span>Cerrar Sesion</span>
            <SvgCancel></SvgCancel>
          </Button>
        </Col>
        <Col className="col_guardar" sm="6">
          <Button className="btn_save" variant="contained">
            <span>Guarda Cambios</span>
            <SvgGuardar></SvgGuardar>
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
}
export default CancelSubmit;
