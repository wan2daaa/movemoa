import {Button, Modal} from "react-bootstrap";
import popover from "bootstrap/js/src/popover";

const StudentCarfullModal = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>어디에서 어디로</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>예약 하시겠습니까?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>닫기</Button>
                    <Button variant="primary" onClick={props.handleClose}>등록하기</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};
export default StudentCarfullModal
