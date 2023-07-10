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
                <div>
                    <h4>{item.name}</h4>
                    <h4>{item.caste}</h4>
                </div>
            })
        }
        </>
    );
}

export default Sdisplay;