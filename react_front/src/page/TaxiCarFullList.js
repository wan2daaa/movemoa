import Table from 'react-bootstrap/Table';
import {Button, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import StudentdataModal from "./carfullmodal/StudentdataModal";
import {useState} from "react";

function TaxiCarfullList(props) {
    let navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Button className="float-end mx-5" onClick={() => {
                navigate('/carfull/taxi-register')
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
                {/*{props.datas.map(function (data, index) {*/}
                {/*    return(*/}
                {/*        <tr>*/}
                {/*            <td>{index}</td>*/}
                {/*            <td>{data.title}</td>*/}
                {/*            <td>{data.content}</td>*/}
                {/*            <td>{data.price}</td>*/}
                {/*        </tr>*/}
                {/*    )*/}
                {/*})}*/}

                <tr>
                    <td>1</td>
                    <td>건터</td>
                    <td>호암지</td>
                    <td>1자리 남음</td>
                    <td>3000</td>
                    <td><Button onClick={handleShow}>예약하기</Button></td>
                    <StudentdataModal show={showModal} handleClose={handleClose}/>
                </tr>
                <tr>
                    <td>2</td>
                    <td>학교 도서관</td>
                    <td>충터</td>
                    <td>{`2자리 남음`}</td>
                    <td>4000</td>
                    <td><Button onClick={handleShow}>예약하기</Button></td>
                    <StudentdataModal show={showModal} handleClose={handleClose}/>
                </tr>
                <tr>
                    <td>3</td>
                    <td>바보계단</td>
                    <td>건국이네</td>
                    <td>많이 남음</td>
                    <td>5000</td>
                    <td><Button onClick={handleShow}>예약하기</Button></td>
                    <StudentdataModal show={showModal} handleClose={handleClose}/>
                </tr>
                </tbody>
            </Table>
        </>
    );
}




export default TaxiCarfullList;
