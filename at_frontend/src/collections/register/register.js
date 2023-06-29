import React from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const nav=useNavigate();
    const[check,SetCheck]=useState("");
    const[name,SetName]=useState("");
    const[regd,SetRegd]=useState("");
    const[year,SetYear]=useState("");
    const[section,SetSection]=useState("");
    const[email,SetEmail]=useState("");
    const[phno,SetPhno]=useState("");
    const handleclick =async()=>{
        const  responce = await axios.get("http://localhost:6000/check/"+name);
        const  responce1 = await axios.get("http://localhost:6000/check1/"+email);
        const  responce2 = await axios.get("http://localhost:6000/check2/"+phno);
        if(responce.data)
        {
            SetCheck("User Name is already exists");
        }
        else if(responce1.data)
        {
            SetCheck("E-mail is already exists");
        }
        else if(responce2.data)
        {
            SetCheck("Phone number is already exists");
        }
        else
        {
        const  responce3 = await axios.post("http://localhost:6000/signup/"+name+"/"+regd+"/"+year+"/"+section+"/"+email+"/"+phno);
        alert("register successfully");
        nav('/')
        }
    }
    return(
        <div>
        <br/ >
        <table className="border" align="center">
        <tr>
            <th colspan="6" align="center">SIGNUP FORM</th>
        </tr>
        <br/>
        <tr><td className="marq"><marquee>{check}</marquee></td></tr>
        <br/>
        <tr>
        <th>Name</th>
        <td colspan="4">
        <input type="text" id="name" placeholder="Full Name" name="name" onChange={(e)=>SetName(e.target.value)}/></td></tr><br/>
        <tr>
        <th>Register Number</th>
        <td colspan="4">
        <input type="text" id="regd" placeholder="Regd.no" name="regd" onChange={(e)=>SetRegd(e.target.value)}/></td></tr><br/>
        <tr>
        <th>year of studying</th>
        <td><input type="radio" id="1st"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">1st</label></td>
        <td><input type="radio" id="2nd"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">2nd</label></td>
       <td> <input type="radio" id="3rd"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">3rd</label></td>
        <td><input type="radio" id="4th"  name="year" onChange={(e)=>SetYear(e.target.value)}/><label for="1st">4th</label></td>
        </tr><br/>
        <tr>
        <th>section</th>
        <td><input type="radio" id="A"  name="section" onChange={(e)=>SetSection(e.target.value)}/><label for="A">A</label></td>
        <td><input type="radio" id="B"  name="section" onChange={(e)=>SetSection(e.target.value)}/><label for="B">B</label></td>
       <td> <input type="radio" id="C"  name="section" onChange={(e)=>SetSection(e.target.value)}/><label for="C">C</label></td>
        <td><input type="radio" id="D"  name="section" onChange={(e)=>SetSection(e.target.value)}/><label for="D">D</label></td>
        <td><input type="radio" id="E"  name="section" onChange={(e)=>SetSection(e.target.value)}/><label for="E">E</label></td>
        </tr><br/>
        <tr>
        <th>Email</th>
        <td colspan="4"><input type="email"  id="email" placeholder="G-mail"  name="email" onChange={(e)=>SetEmail(e.target.value)}/></td></tr><br/>
       <tr>
        <th>Mobile Number</th>
        <td colspan="4"><input type="number" id="phno" name="phno" placeholder="Phone number"  onChange={(e)=>SetPhno(e.target.value)}/></td></tr><br/>
        <tr>
        <td colspan="6" align="center"><button type="button" onClick={handleclick}><b>Register</b></button></td></tr>
        </table>
        </div>
    );
}
export default Register;