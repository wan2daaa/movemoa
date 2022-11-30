import {Col, Container, Image, ListGroup, Row, Tab, Tabs} from "react-bootstrap";
import {useEffect, useState} from "react";
import {weekdaySchool, weekdayTerminal, weekendSchool, weekendTerminal} from "../data/BusTimeData";
import moment from "moment/moment";
import {useCookies} from "react-cookie";
import useStore from "../store";


function BusTimetable(){
    const [wans, setWans] = useState([]);

    const {showMyPage, setMyPageFalse, setMyPageTrue, showLoginOut , setLoginOutFalse, setLoginOutTrue } = useStore();

    const [cookies, setCookie, removeCookie] = useCookies();

    const [value, setValue] = useState(0);

    useEffect(() => {
        if (cookies.accessToken !== undefined){
            setMyPageTrue();
            setValue(1);
        }else {
            setMyPageFalse();
        }
    }, [] );


    var nowtime = moment().day();



    return (
        <>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="m-5"
                fill
            >
                <Tab className="" eventKey="" title="충터->건국대->단월">
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
                    {/*<BusTerminalToSchool/>*/}
                </Tab>
                <Tab eventKey="profile" title={"단월->건국대->충터"}>
                    <Container>
                        <Row>
                            <Col>
                                <ListGroup className="mx-auto">
                                    <h3 className={nowtime === 0 || 6 ? `text-primary`:`` }>{value}평일(단월)</h3>
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
                    {/*<BusSchoolToTerminal/>*/}
                </Tab>
                <Tab eventKey="longer-tab" title="600번 버스">
                    <img style={{maxWidth: "100%"}} src={`${process.env.PUBLIC_URL}/IMG_0509.JPG`}/>
                </Tab>
                {/*<Tab eventKey="contact" title="Contact" disabled>*/}
                {/*    <Sonnet />*/}
                {/*</Tab>*/}
            </Tabs>

        </>
    );
}

export default BusTimetable;
