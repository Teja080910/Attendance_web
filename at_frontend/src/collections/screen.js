import React from "react";
import Header from "./header";
import Bdisplay from "./book/bdisplay";
import Bookreg from "./book/bookreg";
const Screen =()=>{
    return(
        <>
        <Header/>
        <br/>
        {/* <div className="screen"><Bookreg/></div><br/><br/> */}
        <div  className="space">
        <div className="screen1"><Bookreg/></div>
        <div className="screen"><Bdisplay/></div>
        </div>
        </>
    )
}
export default Screen;