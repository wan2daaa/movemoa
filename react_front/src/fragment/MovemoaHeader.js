import {Button, Container, Modal, Nav, Navbar, Stack} from "react-bootstrap";
import {Link, Outlet, useNavigate} from "react-router-dom";
import useStore from "../store";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";


function MovemoaHeader() {
    let navigate = useNavigate();

    const {name, setName, showMyPage, setMyPageFalse, setMyPageTrue, showLoginOut , setLoginOutFalse, setLoginOutTrue } = useStore();

    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

    useEffect(() => {
        if (cookies.accessToken !== undefined){
            setMyPageTrue();
            setName(cookies.name);
        }else {
            setMyPageFalse();
        }
    }, [showMyPage]);

    const setLoginFalse = () => {
        setLoginOutFalse();
    }

    const setLoginTrue = () => {
        setLoginOutTrue();
    }
    const click = () =>{
        setMyPageFalse();
        removeCookie('accessToken');
    }



    const [show, setShow] = useState(false);

    //showMypage = false -> 로그인 보여줌
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home">이동모아</Navbar.Brand>
                    <Nav className="me-auto">
                        {/*<Nav.Link  href="/">Home</Nav.Link>*/}
                        <Nav.Link href="/bus" onClick={ ()=>{navigate("/bus");}}>버스 시간표</Nav.Link>
                        <Nav.Link onClick={()=>{showMyPage ? navigate("/student") : setLoginFalse() ;}} >학생 카풀</Nav.Link>
                        <Nav.Link onClick={()=>{showMyPage ? navigate("/taxi") : setLoginFalse();}} >택시 카풀</Nav.Link>
                        <Stack direction={"horizontal"} className={"end-0 position-fixed"}>
                            <div hidden={!showMyPage}>{name}님 환영합니다!</div>
                            <Button hidden={showMyPage} variant="primary" size="sm" onClick={()=>navigate("/login")}>로그인</Button>
                            <Button hidden={!showMyPage} onClick={click} variant="primary" size="sm" >로그아웃</Button>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet></Outlet>
            <Modal show={!showLoginOut}>
                <Modal.Header>
                    <Modal.Title>인증 필요!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>예약 및 등록을 위해서 로그인 해주세요!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{navigate("/login");}}>로그인하기</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MovemoaHeader;
