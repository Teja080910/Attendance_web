import React, { useEffect, useState } from "react";
import axios from "axios"; 
const Book= () => {
    const regd1=localStorage.regd;
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/details/'+regd1)
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        }
    )},[])
    return(
        <>
        <h1>{regd1}</h1>
        {  
            data.map((item)=>{ 
                return(
               <>
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
                </>
                )
            })
        }
        </>
    );
}

export default Book;