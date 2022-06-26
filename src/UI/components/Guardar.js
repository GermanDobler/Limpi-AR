import "./styles/CancelSubmit.css";
import Row from "react-bootstrap/Row";
import { Fragment } from "react";
import { Button } from "@material-ui/core";
import SvgGuardar from "./SvgGuardar";
function Guardar(props) {
  return (
    <Fragment>
      <Row className="container_guardar">
        <Button className="btn_save" variant="contained">
          <span>{props.guardar}</span>
          <SvgGuardar></SvgGuardar>
        </Button>
      </Row>
    </Fragment>
  );
}
export default Guardar;
