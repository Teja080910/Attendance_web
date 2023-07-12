import React, { useEffect, useState } from "react";
import axios from "axios"; 
const Sdisplay= () => {
    const[regd,Setregd]=useState("");
    const[data,setData]=useState([]);
    const Search =async()=>{
    useEffect(()=>{
        axios.get('http://localhost:4000/detail/'+regd)
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        }
    )},[])
        window.location.reload(false);
    }

    return(
        <>
         <div className="search">
        <br/> <input type="text" className="width" id="regd" name="reg" placeholder="Register Number" onChange={(e)=>Setregd(e.target.value)}/>
        <button className="height" onclick={Search}>search</button>
        </div>
        {
            data.map((item)=>{ 
                <table className="table1">
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.regd}</td>
                     <td>{item.year}</td>
                     <td>{item.section}</td>
                    <td >{item.email}</td>
                    <td>{item.phno}</td>
                    </tr>
                    <br/>
                    </table>
            })
        }
        </>
    );
}

export default Sdisplay;