import "./styles/CancelSubmit.css";
import Row from "react-bootstrap/Row";
import { Fragment } from "react";
import { Button } from "@material-ui/core";
import SvgCancel from "./SvgCancel";
function Cancel(props) {
    return (
        <Fragment>
            <Row className="container_cancel">
                <Button className="btn_cancel" variant="contained">
                    <span>{props.eliminar}</span>
                    <SvgCancel></SvgCancel>
                </Button>
            </Row >
        </Fragment>
    );
}
export default Cancel