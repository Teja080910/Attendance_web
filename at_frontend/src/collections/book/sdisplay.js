import React, { useEffect, useState } from "react";
import axios from "axios"; 
import Header from "../header";
import Book from "./book";
const Sdisplay= () => {
    const[regd,Setregd]=useState("");
    const[data,setData]=useState([]);
    const Search =async()=>{
        localStorage.regd=regd;
    useEffect(()=>{
        axios.get('http://localhost:4000/detail/'+regd)
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        }
    )},[])
 
        // localStorage.regd=regd;
        //window.location.reload(false);
    }
    return(
        <>
        <Header/>
         <div className="search">
        <br/> <input type="text" className="width" id="regd" name="regd" placeholder="Register Number" onChange={(e)=>Setregd(e.target.value)}/>
        <button className="height" onclick={Search}>search</button>
        </div>
        <div className="test1">
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
        </div>
        <div className="test2">
        <Book/>
        </div>
        </>
    );
}

export default Sdisplay;