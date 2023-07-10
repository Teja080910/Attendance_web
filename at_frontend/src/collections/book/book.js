import axios from "axios";
import React, { useEffect,useState } from "react";
import Header from "../header";
import {useNavigate} from "react-router-dom";
const Book=()=>{
    const nav=useNavigate();
    const[regd,setregd]=useState("");
    const Search =async()=>{
        localStorage.regd=regd;
        nav('/screen');
        window.location.reload(false);
    }
    return(
        <>
        <div className="search">
        <br/><input type="text"  className="width" placeholder="register number" id="regd" name="regd" onChange={(e)=>setregd(e.target.value)}></input>
        <button className="height" onclick={Search}>search</button>
        </div>
         </>
    )

}
export default Book;
