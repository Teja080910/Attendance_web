import React, { useEffect, useState } from "react";
import axios from "axios"; 
const Sdisplay= () => {
    const[data,setData]=useState([]);
   const regd=localStorage.regd;
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
             return(
               <>
                    <table className="table1">
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.regd}</td>
                    <td>{item.year}</td>
                     <td>{item.section}</td>
                     <td>{item.email}</td>
                    <td>{item.phno}</td>
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

export default Sdisplay;