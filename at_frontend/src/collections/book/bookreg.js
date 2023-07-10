import React, { useEffect, useState } from "react";
import axios from "axios"; 
const Bookreg= () => {
    const regd=localStorage.regd;
    const[bname,setbname]=useState([]);
    const[duration,setduration]=useState([]);
    const[code,setcode]=useState([]);
    const[pdate,setpdate]=useState([]);
    const[ldate,setldate]=useState([]);
    const enter=async()=>{
        const data=await axios.post("http://localhost:4000/enter/"+regd+"/"+bname+"/"+code+"/"+duration+"/"+pdate+"/"+ldate);
    }
    return(
        <>
        <table align="center">
            <tr>
                <th>Book Name</th>
                <td><input type="text" id="bname" name="bname" onChange={(e)=>setbname(e.target.value)} ></input></td>
            </tr>
            <tr>
                <th>Book Code</th>
                <td><input type="text" id="code" name="code" onChange={(e)=>setcode(e.target.value)} ></input></td>
            </tr>
            <tr>
            <th>Duration</th>
            <td><input type="radio" id="1"  name="duration" onChange={(e)=>setduration('1')}/><label for="1">1</label>
            <input type="radio" id="3"  name="duration" onChange={(e)=>setduration('3')}/><label for="3">3</label></td>
            </tr>
            <tr>
                <th>Starting date</th>
                <td><input type="date" id="pdate" name="pdate" onChange={(e)=>setpdate(e.target.value)} ></input></td>
            </tr>
            <tr>
                <th>Ending date</th>
                <td><input type="date" id="ldate" name="ldate" onChange={(e)=>setldate(e.target.value)} ></input></td>
            </tr>
            <tr>
                <td colSpan="2" align="center"><button onClick={enter}>Enter</button></td>
            </tr>
        </table>
        </>
    );
}

export default Bookreg ;