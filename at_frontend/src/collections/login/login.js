import React from "react";
import {useNavigate} from "react-router-dom";
const Log=()=>
{
    const nav=useNavigate();
    const Sturegi=async()=>
    {
         nav("/register");
    }
    const libbooks=async()=>
    {
        nav("/screen");
    }
    const studetail=async()=>
    {
        nav("/display");
    }
    return(
        <>
        <div className="log">
            <div className="logclgname"><img src="srkrlogo.png" alt="srkr logo" style={{width:"80px"}}></img>SRKR ENGINNERING COLLEGE</div>
            <div className="logclgdept">DEPARTMENT OF CSE</div>
            <div>
                <button className="libent" onClick={Sturegi}><b>Student register</b></button>
                <button className="libent" onClick={libbooks}><b>Library books</b></button>
                <button className="libent" onClick={studetail}><b>Student details</b></button>
            </div>
        </div>
        </>
    )
}
export default Log;