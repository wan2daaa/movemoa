import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import StudentCarfullModal from "./carfullmodal/StudentdataModal";

const StudentCarFullDetail = () =>{

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [viewContent, setViewContent] = useState([]);
    let {id} = useParams();

    useEffect(() => {

        let body = {
            idx: id
        }
        axios.post(`http://localhost:8080/api/student/${id}`, body)
            .then((res) => {
                setViewContent(res.data);
            })
    }, []);

    return(
    <>
        <Table striped className="mb-5">
            <thead>
            <tr>
                <th>번호</th>
                <th>출발지</th>
                <th>도착지</th>
                <th>남은 인원</th>
                <th>인당 가격</th>
                <th>예약</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{viewContent.idx}</td>
                <td>{viewContent.start}</td>
                <td>{viewContent.end}</td>
                <td>{viewContent.member}</td>
                <td>{viewContent.price}</td>
                <td><Button onClick={handleShow}>예약하기</Button></td>
            </tr>
            </tbody>
        </Table>
        <StudentCarfullModal show={showModal} close={handleClose} open={handleShow} index={viewContent.idx} member={viewContent.member}/>
    </>
    )
}

export default StudentCarFullDetail;
