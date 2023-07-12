import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
import axios from "axios"; 
const Bookreg= () => {

    const[regd,setregd]=useState([]);
    const[bname,setbname]=useState([]);
    // const[duration,setduration]=useState([]);
    const[code,setcode]=useState([]);
    const[date1,setdate]=useState([]);
    // const[ldate,setldate]=useState([]);
    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();
    const enter=async()=>{
        try{
        const data=await axios.post("http://localhost:4000/enter/"+regd+"/"+bname+"/"+code+"/"+date1+"/"+showTime);
        window.location.reload(false);
        }
        catch(err)
        {
            alert("enter valid details");
        }
    }
   
    return(
        <>
        <table align="center" className="table">
            <tr>
                <th>Register Number</th>
                <td><input className="input1" type="text" id="regd1" name="regd1" onChange={(e)=>setregd(e.target.value)} ></input></td>
            </tr>
            <tr>
                <th>Book Name</th>
                <td><input className="input1"  type="text"  id="bname" name="bname" onChange={(e)=>setbname(e.target.value)} ></input></td>
            </tr>
            <tr>
                <th>Book Code</th>
                <td><input className="input1" type="text" id="code" name="code" onChange={(e)=>setcode(e.target.value)} ></input></td>
            </tr>
            <tr>
                <th>Time and Date</th>
                <td><input className="input1" type="date"  id="date1" name="date1" onChange={(e)=>setdate(e.target.value)} ></input>{showTime}</td>
            </tr>
            <tr>
                <td colSpan="3" align="center"><button className="enter"  onClick={enter}>Enter</button></td>
            </tr>
        </table>
        </>
    );
}

export default Bookreg ;