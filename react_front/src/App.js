import './App.css';
import StudentCarFullList from "./page/StudentCarFullList";
import MovemoaHeader from "./fragment/MovemoaHeader";
import {Route, Routes, useNavigate} from "react-router-dom";
import BusTimetable from "./page/BusTimetable";
import TaxiCarFullList from "./page/TaxiCarFullList";
import StudentCarfullRegister from "./page/StudentCarfullRegister";
import TaxiCarfullRegister from "./page/TaxiCarfullRegister";
import Login from "./page/Login";
import SignUp from "./page/signup/SignUp";
import StudentCarFullDetail from "./page/StudentCarFullDetail";
import {useState} from "react";
import Home from "./page/Home";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MovemoaHeader/>}>
                    <Route path="/home" element={Home}></Route>
                    <Route path="/bus" element={<BusTimetable/>}></Route>

                    <Route path="/student" element={<StudentCarFullList/>}/>
                    <Route path="/student/:id" element={<StudentCarFullDetail/>}/>
                    <Route path="/student-register" element={<StudentCarfullRegister/>}/>
                    <Route path="/taxi" element={<TaxiCarFullList/>}/>
                    <Route path="/taxi-register" element={<TaxiCarfullRegister/>}/>
                </Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                {/*<Route path="/carfull" element={<MovemoaHeader/>}>*/}

                        {/*<Route path="detail/:id" element={<StudentCarfullModal/>}/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/carfull" element={<div>asd<Outlet></Outlet></div>}>*/}
            </Routes>
        </div>
    );
}

export default App;
