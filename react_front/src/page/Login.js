import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div style={{height:'50%', width : '50%', textAlign:'left', display:'inline-block', paddingTop : "100px"}}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{marginLeft:'10px'}}>학교 이메일</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{marginLeft:'10px'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group>
                <Button style={{border:0 ,backgroundColor:'white', color:"steelblue", padding:"0"}}>비밀번호를 잊어버렸습니까? 휴먼?</Button>
            </Form.Group>
            <Form.Group>
                <Button style={{border:0 ,backgroundColor:'white', color:"steelblue", padding:"0"}} onClick={()=>navigate('/signup')}>회원가입</Button>
            </Form.Group>
            <Button variant="primary" type="submit" size={"sm"} style={{marginTop:'2px'}} onClick={()=>navigate('/')}>로그인</Button>
        </Form>
        </div>
    );
}

export default Login;
