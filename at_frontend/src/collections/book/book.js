import axios from "axios";
import React, { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom";
const Book=()=>{
    const nav=useNavigate();
    const[regd,Setregd]=useState("");
   
    const Search =async()=>{
        localStorage.regd=regd;
        window.location.reload(false);
    }
    return(
        <>
        <div className="search">
        <br/> <input type="text" className="width" id="regd" name="reg" placeholder="Register Number" onChange={(e)=>Setregd(e.target.value)}/>
        <button className="height" onclick={Search}>search</button>
        </div>
         </>
    )

}
export default Book;
