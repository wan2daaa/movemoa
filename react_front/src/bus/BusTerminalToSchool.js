import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {weekendTerminal,weekdayTerminal} from "../data/BusTimeData";
import moment from "moment";

function BusTerminalToSchool(){
    var nowtime = moment().day();
    console.log(moment);
    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup className="mx-auto">
                        <h3 className={nowtime === 0 || 6 ? `text-primary`:`` }>평일(충주터미널)</h3>
                        {weekdayTerminal.map((value) => {
                            return (<ListGroup.Item className="">{value}</ListGroup.Item>)
                        })}
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <h3 className={nowtime === 0 || 6 ? ``:`text-primary` }>주말, 방학중(충주터미널)</h3>
                        {weekendTerminal.map((value) => {
                            return (<ListGroup.Item>{value}</ListGroup.Item>)
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default BusTerminalToSchool;
