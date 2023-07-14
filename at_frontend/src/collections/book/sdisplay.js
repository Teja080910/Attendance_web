import React, { useEffect, useState } from "react";
import axios from "axios"; 
import Header from "../header";
const Sdisplay= () => {
    const[regd,Setregd]=useState([]);
    const[data1,setData1]=useState([]);
    const[data2,setData2]=useState([]);
   const handleclick=async()=>{
    try{
    const  details = await axios.get("http://localhost:4000/find1/"+regd);
    if(details.data)
    {
        setData1(details.data);
        localStorage.regd=regd;
    }
    else
    {
        alert("not registered");
    }
    }
    catch(err)
    {
        alert("enter register number");
    }
    }
    useEffect(()=>{
        const regd1=localStorage.regd;
        axios.get('http://localhost:4000/details/'+regd1)
        .then((responce)=>{   
            // console.log(responce.data)
            setData2(responce.data);
            // window.location.reload(false);
        })
        .catch((err)=>{
            console.log(err);
        }
    )},[])
    return(
        <div className="log1">
        <Header/>
        <div >
        <input className="width" type="text" id="regd" placeholder="Regd.no" name="regd" onChange={(e)=>Setregd(e.target.value)}/>
        <button  className="height" onClick={handleclick}>search</button>
        </div>
        <br/>
        <table className="table2"><tr><th>Name</th><th>Register number</th><th>Year</th><th>Section</th><th>Email</th><th>Mobile number</th></tr></table>
        {/* {
            data1.map((item)=>{ 
              return(  */}
               <>
                    <table className="table2">
                    <tr>
                    <th>{data1.name}</th>
                    <th>{data1.regd}</th>
                    <th>{data1.year}</th>
                     <th>{data1.section}</th>
                     <th>{data1.email}</th>
                    <th>{data1.phno}</th>
                    </tr>
                    <br/>
                    </table>
                </>
                 {/* ) 
             }) 
        } */}
        <br/>
        <table className="table3"><tr><th>Book name</th><th>Book code</th><th>Date</th><th>Time</th></tr></table><br/>
          {  
          
          data2.map((item)=>{ 
            return(
               <>
                    <table className="table3">
                    <tr>
                    <th>{item.bname}</th>
                     <th>{item.code}</th>
                     <th>{item.date}</th>
                    <th>{item.time}</th>
                    </tr>
                    <br/>
                    </table>
                </>
                
            )
            })
        } 
        </div>
    );
}

export default Sdisplay;