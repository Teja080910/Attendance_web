import React, { useEffect, useState } from "react";
import axios from "axios"; 
const Book= () => {
    const[data,setData]=useState([]);
    const regd=localStorage.regd;
    useEffect(()=>{
        axios.get('http://localhost:4000/details/'+regd)
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