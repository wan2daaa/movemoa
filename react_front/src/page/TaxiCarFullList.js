import Table from 'react-bootstrap/Table';
import {Button, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function TaxiCarfullList(props) {
    let navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [viewContent , setViewContent] = useState([]);

    const [id, setId] = useState(0);



    useEffect(()=>{
        axios.get('http://localhost:8080/api/student/getAll').then((response)=>{
            setViewContent(response.data);
        })

    },[]);


    const setModal = ()=>{
        setShowModal(true);
    }


    return (
        <>
            <Button className="float-end mx-5" onClick={() => {

                navigate('/carfull/student-register');
            }}>등록</Button>
            <Table striped className="mb-5">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>출발지</th>
                    <th>도착지</th>
                    <th>인원</th>
                    <th>예상 가격</th>
                    <th>예약</th>
                </tr>
                </thead>
                <tbody>
                {viewContent.map(function (data, index) {
                    return(
                        <>
                            <tr>
                                <td>{data.idx}</td>
                                <td>{data.start}</td>
                                <td>{data.end}</td>
                                <td>{data.member}자리 남음</td>
                                <td>{data.price}</td>
                                <td><Button  onClick={()=>{ navigate(`/carfull/student/${data.idx}`); } }>예약하기</Button></td>


                            </tr>

                        </>
                    )
                })}
                </tbody>
            </Table>

        </>
    );
}




export default TaxiCarfullList;
