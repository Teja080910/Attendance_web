import React, { useEffect, useState } from "react";
import axios from "axios"; 
const regd=localStorage.regd;
const Bdisplay= () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/screen/'+regd)
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
                <>
                <div>
               <h3>{item.bname}</h3>
               <h3>{item.code}</h3>
               <h3>{item.duration}</h3>
               <h3>{item.pdate}</h3>
               <h3>{item.ldate}</h3>
               </div>
               <br/>
               </>
            })
        }
        </>
    );
}

export default Bdisplay;