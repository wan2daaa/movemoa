import {Button, Col, Form, Row} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import moment from "moment";

/**
 * TODO 1. Range 중앙정렬로 변경
 */

const StudentCarfullRegister = () => {
    const navigate = useNavigate();
    const today = moment().format('YYYY-MM-DD');


    const [selectedDate, setSelectedDate] = useState(new Date());
    const [ value, setValue ] = useState(0);

    return (
        <Form style={{marginLeft: "100px", marginRight: "100px"}} className="text-start ">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>출발지</Form.Label>
                <Form.Control type="text" placeholder="출발지를 입력하세요" className="register"/>
                {/*<Form.Text className="text-muted">*/}
                {/*    We'll never share your email with anyone else.*/}
                {/*</Form.Text>*/}
            </Form.Group>
            <Form.Group>
                <Form.Label>도착지</Form.Label>
                <Form.Control type="text" placeholder="도착지를 입력하세요" className="register"/>
            </Form.Group>
            <Form.Label>인원수</Form.Label>
            <Form.Group as={Row} className="">
                <Col xs="10">
                    <FormRange
                        min="1" max="4"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Col>
                <Col xs="2">
                    <Form.Control className="text-center" value={value}/>
                </Col>
            </Form.Group>
            {/*<Form.Group controlId="formBasicPassword" >*/}
            {/*    <Form.Label >1인당 금액</Form.Label>*/}
            {/*    <Form.Control type="text" placeholder="가격" className="register"/>*/}
            {/*</Form.Group>*/}
            <Form.Group className="register" controlId="formBasicCheckbox">
                <Form.Label>인원수</Form.Label>
                <Form.Control type={"date"} value={today} ></Form.Control>

                {/*<Form.Check type="checkbox" label="Check me out" style={{textAlign:"left"}} />*/}
            </Form.Group>

            <Button variant="primary" type="submit" className="float-end m-2"
                    onClick={() => navigate('/carfull/taxi')}>Submit</Button>
        </Form>
    );
};

export default StudentCarfullRegister;
