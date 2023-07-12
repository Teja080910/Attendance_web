import React from "react";
import Book from "./book/book";
import Header from "./header";
import Sdisplay from "./book/sdisplay";
import Bdisplay from "./book/bdisplay";
import Bookreg from "./book/bookreg";
const Screen =()=>{
    return(
        <>
        <Header/>
        <br/>
        <div  className="space">
        <div className="screen"><Bookreg/></div>
        <div className="screen"><Bdisplay/></div>
        </div>
        </>
    )
}
export default Screen;