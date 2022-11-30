import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const SignUp = () =>{

    const navigate = useNavigate();

    const [postEmail, setPostEmail] = useState("");
    const [verifyNum, setVerifyNum] = useState("");
    const [checkNum, setCheckNum] = useState("");
    const [show, setShow] = useState(false);
    const [veryShow, setVeryShow] = useState(false);
    const [veryHidden, setVeryHidden] = useState(false);
    const [showPass, setShowPass] = useState(true);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showRightModal, setShowRightModal] = useState(false);
    const [showWrongModal, setShowWrongModal] = useState(false);
    const [showPassModal, setShowPassModal] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: postEmail
        };

        axios.post("http://localhost:8080/signup", body)
            .then((res) => setCheckNum(res.data));
    };

    const signupHandler = (e) => {
        e.preventDefault();

        let body = {
            email : postEmail,
            pass : password,
            name: name
        }

        axios.post("http://localhost:8080/signupdata", body);
    };

    const Wrongfalse = () => {
        setShowWrongModal(!showWrongModal);

    };

    const Rightfalse = () => {
        setShowRightModal(!showRightModal);
        setVeryShow(!veryShow);
        setVeryHidden(!veryHidden);
    };

    return(
        <div style={{height:'50%', width : '50%', textAlign:'left', display:'inline-block', paddingTop : "100px"}}>
            <Form  onSubmit={submitHandler}>
                <Form.Group className="mb-0 " controlId="formBasicEmail" >
                <Form.Label >학교 이메일 인증</Form.Label>
                <Form.Control type="email" onChange={(e)=>{setPostEmail(e.target.value)}} value={postEmail} disabled={show} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                <Button variant="primary" type="submit" hidden={show} size={"sm"} style={{marginTop:'2px', marginBottom:'5px'}} onClick={()=>{setShow(true)}}>이메일 인증</Button>
        </Form.Group>
                <Form.Group hidden={!show}>
                    <Form.Text>인증번호</Form.Text>
                    <Form.Control type="text" disabled={veryShow} onChange={(e)=>{setVerifyNum(e.target.value)}}/>
                    <Button variant="primary" hidden={veryShow}  size={"sm"} style={{marginTop:'2px', marginBottom:'5px'}} onClick={verifyNum==checkNum ?Rightfalse: Wrongfalse}>{checkNum}</Button>
                </Form.Group>
            </Form>
            <Form onSubmit={signupHandler}>
                <Form.Group hidden={showPass}>
                    <Form.Text>이름</Form.Text>
                    <Form.Control type="text" placeholder={"이름"} onChange={(e)=>{setName(e.target.value)}}></Form.Control>
                    <Form.Text>비밀번호</Form.Text>
                    <Form.Control type="password" placeholder={"비밀번호"} onChange={(e)=>{setPassword(e.target.value)}}></Form.Control>
                    <Button variant="primary" type="submit" size={"sm"} style={{marginTop:'2px', marginBottom:'5px'}} onClick={()=>{setShowPassModal(!showPassModal)}}>비밀번호 설정 </Button>
                </Form.Group>
            </Form>
            <Modal show={showRightModal} onHide={()=>{
                setShowRightModal(!showRightModal);}}>
                <Modal.Header closeButton>
                    <Modal.Title>성공!</Modal.Title>
                </Modal.Header>
                <Modal.Body>인증번호가 일치 합니다!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{setShowRightModal(!showRightModal);setShowPass(!showPass);}}>닫기</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showWrongModal} onHide={Wrongfalse}>
                <Modal.Header closeButton>
                    <Modal.Title>실패!</Modal.Title>
                </Modal.Header>
                <Modal.Body>인증번호가 일치안합니다 다시 입력하세요!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{navigate('/signup')}}>닫기</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showPassModal}>
                <Modal.Header>
                    <Modal.Title>회원가입</Modal.Title>
                </Modal.Header>
                <Modal.Body>회원가입이 완료되었습니다! :)</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>navigate('/login')}>로그인</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SignUp;
