import React from "react";
import Header from "./header";
import Book from "./book/book";
import Sdisplay from "./book/sdisplay";
import Search from "./book/search";
const Screen1 =()=>{
    return(
        <>
        <Header/>
        <Search/>
        {/* <div  className="space">
        <div className="screen12"><Sdisplay/></div>
        <div className="screen2"><Book/></div>
        </div> */}
        </>
    )
}
export default Screen1;