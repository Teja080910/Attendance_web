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
        <div className="screen"><Bookreg/></div><br/><br/>
        <div className="screen"><Bdisplay/></div>
        </>
    )
}
export default Screen;