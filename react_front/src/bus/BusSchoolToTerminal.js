import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {weekendTerminal, weekdayTerminal, weekdaySchool, weekendSchool} from "../data/BusTimeData";
import moment from "moment";

function BusTerminalToSchool(){
    var nowtime = moment().day();
    console.log(moment);
    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup className="mx-auto">
                        <h3 className={nowtime === 0 || 6 ? `text-primary`:`` }>평일(단월)</h3>
                        {weekdaySchool.map((value) => {
                            return (<ListGroup.Item className="">{value}</ListGroup.Item>)
                        })}
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <h3 className={nowtime === 0 || 6 ? ``:`text-primary` }>주말, 방학중(단월)</h3>
                        {weekendSchool.map((value) => {
                            return (<ListGroup.Item>{value}</ListGroup.Item>)
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default BusTerminalToSchool;
