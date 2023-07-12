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
<<<<<<< HEAD
        <div className="screen"><Bookreg/></div><br/><br/>
=======
        <div  className="space">
        <div className="screen1"><Bookreg/></div>
>>>>>>> 2146dca17c826f0806047ed8249cd7824394a4a3
        <div className="screen"><Bdisplay/></div>
        </>
    )
}
export default Screen;