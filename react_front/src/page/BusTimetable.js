import BusTerminalToSchool from "../bus/BusTerminalToSchool";
import {Image, Tab, Tabs} from "react-bootstrap";
import BusSchoolToTerminal from "../bus/BusSchoolToTerminal";
import axios from "axios";
import {useEffect, useState} from "react";


function BusTimetable(){
    const [wans, setWans] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/testapi'
                );
                setWans([ response.data]);
                console.log(wans);
            } catch (e) {
                throw new Error(e);
            }
        };
        fetchApi();
    }, []);

    return (
        <>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="m-5"
                fill
            >
                <Tab className="" eventKey="" title="충터->건국대->단월">
                    <BusTerminalToSchool/>
                </Tab>
                <Tab eventKey="profile" title={wans.map((value)=> `${value.name}`)}>
                    <BusSchoolToTerminal/>
                </Tab>
                <Tab eventKey="longer-tab" title="600번 버스">
                    <img style={{maxWidth: "100%"}} src={`${process.env.PUBLIC_URL}/IMG_0509.JPG`}/>
                </Tab>
                {/*<Tab eventKey="contact" title="Contact" disabled>*/}
                {/*    <Sonnet />*/}
                {/*</Tab>*/}
            </Tabs>

        </>
    );
}

export default BusTimetable;
