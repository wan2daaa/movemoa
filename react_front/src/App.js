import './App.css';
import StudentCarFullList from "./page/StudentCarFullList";
import MovemoaHeader from "./fragment/MovemoaHeader";
import {useEffect, useState} from "react";
import SampleData from "./sampleData/SampleData";
import {Route, Routes} from "react-router-dom";
import BusTimetable from "./page/BusTimetable";
import TaxiCarFullList from "./page/TaxiCarFullList";
import StudentCarfullRegister from "./page/StudentCarfullRegister";
import TaxiCarfullRegister from "./page/TaxiCarfullRegister";
import axios, {Axios} from "axios";
import Users from "./testApi/Users";
import Login from "./page/Login";
import SignUp from "./page/signup/SignUp";


function App() {
   let [studentCarFullData, setStudentCarFullData] = useState(SampleData);

  return (
    <div className="App">
{/*<StudentCarFullList datas={studentCarFullData} />*/}
        <Routes>
            <Route path="/" element={<><MovemoaHeader/></>}>
                <Route path="/login" element={<Login/>} ></Route>
                <Route path="/signup" element={<SignUp/>} ></Route>
                <Route path="/bus" element={<BusTimetable/>}/>
            </Route>
            <Route path="/carfull" element={<MovemoaHeader/>}>
                <Route path="student" element={<StudentCarFullList datas={studentCarFullData} />}></Route>
                <Route path="student-register" element={<StudentCarfullRegister/>}/>

                <Route path="taxi" element={<TaxiCarFullList datas={studentCarFullData} />}/>
                <Route path="taxi-register" element={<TaxiCarfullRegister/>}/>
                {/*<Route path="/carfull" element={<div>asd<Outlet></Outlet></div>}>*/}
            </Route>


        </Routes>
    </div>
  );
}

export default App;
