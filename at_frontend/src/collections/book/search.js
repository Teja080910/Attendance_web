import React from "react";
import Header from "../header";
const Search=()=>{
    const[regd,Setregd]=useState("");
    localStorage.regd=regd;
    const search3 =async()=>{
        window.location.reload(false);
    }
    return(
    <>
    <Header/>
    <div className="search">
    <br/> <input type="text" className="width" id="regd" name="regd" placeholder="Register Number" onChange={(e)=>Setregd(e.target.value)}/>
    <button className="height" onclick={search3}>search</button>
    </div>
    </>
    )
}
export default Search;