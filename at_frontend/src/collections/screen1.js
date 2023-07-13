import React from "react";
import Header from "./header";
import Book from "./book/book";
import Sdisplay from "./book/sdisplay";
import Screen from "./screen";
const Screen1 =()=>{
    return(
        <>
        <Header/>
        <br/>
        <div className="screen"><Screen/></div><br/><br/>
        <div  className="space">
        <div className="screen1"><Sdisplay/></div>
        <div className="screen"><Book/></div>
        </div>
        </>
    )
}
export default Screen1;