import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

<Form.Control type="text" placeholder={"인증번호"}></Form.Control>

const EmailCertification = () =>{
    const navigate = useNavigate();

    const [certNum, setCertNum] = useState(null);
    const [show, setShow] = useState(false);

    return(
        <div style={{height:'50%', width : '50%', textAlign:'left', display:'inline-block', paddingTop : "100px"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >학교 이메일 인증</Form.Label>
                    <Form.Control type="email"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
        )
    };

export default EmailCertification;
