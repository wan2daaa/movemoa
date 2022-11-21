import {Container, Nav, Navbar} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";

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
                    </Nav>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </>
    );
}

export default MovemoaHeader;
