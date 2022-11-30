import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const StudentCarfullModal = (props) =>{
    const navigate = useNavigate();

    return(
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>어디에서 어디로</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>예약 하시겠습니까?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>닫기</Button>
                <Button variant="primary" onClick={()=>{
                    if (props.member > 0){
                        let body = {
                            idx : props.index,
                            member : props.member
                        }
                        axios.post('http://localhost:8080/api/student/reserve', body);
                        navigate('/student');
                    }else {
                        alert("더는 예약할 수 없습니다!");
                        navigate('/student');
                    }

                }} >등록하기</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StudentCarfullModal
