import {Button, Container, Nav, Navbar, Stack} from "react-bootstrap";
import {Link, Outlet, useNavigate} from "react-router-dom";

function MovemoaHeader() {
    let navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">이동모아</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href='/carfull/student' >학생 카풀</Nav.Link>
                        <Nav.Link href="/carfull/taxi">택시 카풀</Nav.Link>
                        <Nav.Link href="/bus">버스 시간표</Nav.Link>
                        <Stack direction={"horizontal"} className={"end-0 position-fixed"}>
                            <p className={"mx-2 my-1"}>재왕님 환영합니다 ~</p>
                            <p className={"mx-2 my-1"} onClick={()=>navigate("/login")}>로그인 하세요.</p>

                            <Button variant="primary" size="sm" onClick={()=>navigate("/mypage")}>마이페이지</Button>
                        </Stack>

                    </Nav>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </>
    );
}

export default MovemoaHeader;
