import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Search=()=>{
    const nav=useNavigate();
    const[regd,Setregd]=useState(""); 
    localStorage.regd=regd;
    const Search3 =async()=>{
        const data2=await axios.get("http://localhost:4000/find1/"+regd)
        if(data2.data)
        {
            nav('/screen');
            window.location.reload(false);
            
        }
        else
        {
            alert("not registered");
        }
    }
    return(
    <>
    <div className="search">
    <br/> <input type="text" className="width" id="regd" name="regd" placeholder="Register Number" onChange={(e)=>Setregd(e.target.value)}/>
    <button className="height" onclick={Search3}>search</button>
    </div>
    </>
    )
}
export default Search;