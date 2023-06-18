import React from "react";
import{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const nav=useNavigate();
    const[check,SetCheck]=useState("");
    const[name,SetName]=useState("");
    const[regd,SetRegd]=useState("");
    const[year,SetYear]=useState("");
    const[email,SetEmail]=useState("");
    const[phno,SetCpassword]=useState("");
    const handleclick =async()=>{
        const  responce = await axios.get("http://localhost:8000/check/"+name);
        const  responce1 = await axios.get("http://localhost:8000/check1/"+email);
        if(responce.data)
        {
            SetCheck("User Name is already exists");
        }
        else if(responce1.data)
        {
            SetCheck("E-mail is already exists");
        }
        else
        {
        const  responce = await axios.post("http://localhost:8000/signup/"+name+"/"+regd+"/"+email+"/"+phno);
        nav('/login')
        }
    }
    return(
        <div>
        <br/ >
        <table className="border" align="center">
        <tr>
            <th>SIGNUP FORM</th>
        </tr>
        <br/>
        <tr><td className="marq"><marquee>{check}</marquee></td></tr>
        <br/>
        <tr>
        <td>
        <input type="text" id="name" placeholder="Full Name" name="name" onChange={(e)=>SetName(e.target.value)}/></td></tr><br/>
        <tr>
        <td>
        <input type="text" id="regd" placeholder="Regd.no" name="regd" onChange={(e)=>SetRegd(e.target.value)}/></td></tr><br/>
        <tr>
        <td>year of studying</td>
        <td><input type="radio" id="1st"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">1st</label></td>
        <td><input type="radio" id="2nd"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">2nd</label></td>
       <td> <input type="radio" id="3rd"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">3rd</label></td>
        <td><input type="radio" id="4th"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">4th</label></td>
        </tr><br/>
        <tr>
        <td>
        <input type="text" id="regd" placeholder="Regd.no" name="regd" onChange={(e)=>SetRegd(e.target.value)}/></td></tr><br/>

        <tr>
        <td><input type="email"  id="email" placeholder="G-mail"  name="email" onChange={(e)=>SetEmail(e.target.value)}/></td></tr><br/>
        <tr>
        <td><input type="number" id="phno" name="phno" placeholder="Phone number"  onChange={(e)=>SetCpassword(e.target.value)}/></td></tr><br/>
        <tr>
        <td colspan="2" align="center"><button type="button" onClick={handleclick} ><b>Register</b></button></td></tr>
        </table>
        </div>
    );
}
export default Signup;