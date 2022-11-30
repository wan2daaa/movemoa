import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import FormRange from "react-bootstrap/FormRange";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import useStore from "../store";
// import useStore from "zustand";

/**
 * TODO 1. Range 중앙정렬로 변경
 */

const StudentCarfullRegister = (props) => {
    const navigate = useNavigate();

    const [member, setMember] = useState(0);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [price, setPrice] = useState();
    const [show, setShow] = useState(false);
    const [date, setDate] = useState();


    const {showIndex,increaseIndex} = useStore();


    // const {showIndex} = useStore;

    const submitHandler = (e) =>{
        increaseIndex();
        e.preventDefault();



        let body = {
            idx : showIndex,
            start : start,
            end : end,
            member : member,
            price : price,
            date: date
        }

        axios.post("http://localhost:8080/api/register/student", body).then((res)=>{
            if (res.data == "Y"){
                setShow(true);
            }
        })
    }

    return(
        <>
        <Form style={{marginLeft:"100px", marginRight:"100px"}} onSubmit={submitHandler} className="text-start ">
            <Form.Group  controlId="formBasicEmail">
                <Form.Label >출발지</Form.Label>
                <Form.Control type="text" placeholder="출발지를 입력하세요" className="register" onChange={(e)=>{setStart(e.target.value)}} />
                {/*<Form.Text className="text-muted">*/}
                {/*    We'll never share your email with anyone else.*/}
                {/*</Form.Text>*/}
            </Form.Group>
            <Form.Group>
                <Form.Label >날짜</Form.Label>
                {/*<input type="datetime-local"/>*/}
                <Form.Control
                    type="time"
                    name="duedate"
                    placeholder="Due date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label >도착지</Form.Label>
                <Form.Control  type="text" placeholder="도착지를 입력하세요" className="register" onChange={(e)=>{setEnd(e.target.value)}} />
            </Form.Group>
            <Form.Label >인원수</Form.Label>
            <Form.Group  as={Row} className="">
                <Col  xs="10" >
                    <FormRange
                        min = "1" max="4"
                        onChange={(e)=>setMember(e.target.value)}
                        value={member}
                    />
                </Col>
                <Col xs="2">
                    <Form.Control className="text-center" value={member}/>
                </Col>
            </Form.Group>
            <Form.Group controlId="formBasicPassword" >
                <Form.Label >1인당 금액</Form.Label>
                <Form.Control type="text" placeholder="가격" className="register" onChange={(e)=>setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                {/*<DatePicker*/}
                {/*    selected={startTime}*/}
                {/*    onChange={onSelect}*/}
                {/*    locale={ ko }*/}
                {/*    showTimeSelect*/}
                {/*    showTimeSelectOnly*/}
                {/*    timeIntervals={30}*/}
                {/*    minTime={setHours(setMinutes(new Date(), 30), 9)}*/}
                {/*    maxTime={setHours(setMinutes(new Date(), 0), 17)}*/}
                {/*    timeCaption="Time"*/}
                {/*    dateFormat="aa h:mm 시작"*/}
                {/*    placeholderText="시작 시간"*/}
                {/*    className="mt-4"*/}
                {/*/>*/}
            </Form.Group>
            <Form.Group className="register" controlId="formBasicCheckbox" >
                {/*<Form.Check type="checkbox" label="Check me out" style={{textAlign:"left"}} />*/}
            </Form.Group>

            <Button variant="primary" type="submit" className="float-end m-2">Submit</Button>
        </Form>
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>성공</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>정상적으로 등록되었습니다!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{navigate("/student")}}>닫기</Button>
            </Modal.Footer>
        </Modal>
        </>

    )
};

export default StudentCarfullRegister;
