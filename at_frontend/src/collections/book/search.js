import React from "react";
const Search=()=>{
    const[regd,Setregd]=useState("");
    localStorage.regd=regd;
    const search3 =async()=>{
        window.location.reload(false);
    }
    return(
    <>
    <div className="search">
    <br/> <input type="text" className="width" id="regd" name="regd" placeholder="Register Number" onChange={(e)=>Setregd(e.target.value)}/>
    <button className="height" onclick={search3}>search</button>
    </div>
    </>
    )
}
export default Search;