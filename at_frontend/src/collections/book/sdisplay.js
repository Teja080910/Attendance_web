import React, { useEffect, useState } from "react";
import axios from "axios"; 
const regd=localStorage.regd;
const Sdisplay= () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/detail/'+regd)
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        }
    )},[])

    return(
        <>
        {
            data.map((item)=>{ 
                <table className="table1">
                    <tr>
                    <td>{item.regd}</td>
                    <td>{item.bname}</td>
                     <td>{item.code}</td>
                     <td>{item.date}</td>
                    <td >{item.time}</td>
                    </tr>
                    <br/>
                    </table>
            })
        }
        </>
    );
}

export default Sdisplay;