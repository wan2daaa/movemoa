import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import useStore from "../store";
import {Modal} from "react-bootstrap";
import {useCookies} from "react-cookie";

function Login() {
    const navigate = useNavigate();

    const {setName , showMyPage , setMyPageTrue,  setMyPageFalse ,showLoginOut , setLoginOutTrue } = useStore();

    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);


    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [checkLogin, setCheckLogin] = useState("");
    const [show, setShow] = useState(false);

    const loginVerify = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            pass: pw
        };

        axios.post("http://localhost:8080/api/login", body)
            .then((res) =>{
                if (res.data[0] == true){
                    setCookie('accessToken', true);
                    setCookie('name', res.data[1]);
                    setName(res.data[1]);
                    setLoginOutTrue();
                    setMyPageTrue();
                    navigate("/");
                }else {
                    setShow(true);
                }
            } );




    };

    return (
        <>
        <div style={{height:'50%', width : '50%', textAlign:'left', display:'inline-block', paddingTop : "100px"}}>
        <Form onSubmit={loginVerify}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{marginLeft:'10px'}}>학교 이메일</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.{checkLogin}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{marginLeft:'10px'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPw(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {/*<Form.Group>*/}
            {/*    <Button style={{border:0 ,backgroundColor:'white', color:"steelblue", padding:"0"}}>비밀번호를 잊어버렸습니까? 휴먼?</Button>*/}
            {/*</Form.Group>*/}
            <Form.Group>
                <Button style={{border:0 ,backgroundColor:'white', color:"steelblue", padding:"0"}} onClick={()=>navigate('/signup')}>회원가입</Button>
            </Form.Group>
            <Button variant="primary" type="submit" size={"sm"} style={{marginTop:'2px'}}>로그인</Button>
        </Form>
        </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>실패하였습니다</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>틀렸습니다!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>닫기</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
