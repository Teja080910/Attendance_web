import express from 'express'
import {db,connectToDB} from "./db.js";
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("server is running successfully!");
});+
// app.get('/inter',(req,res)=>{
//     const data=db.collection('signup').insertOne({name:"sanju"});
//     res.json(data);
// })
app.get('/install',(req,res)=>{
    const push=db.collection('register').insertOne({name:"sanju"});
    res.json(push);
})
app.post('/signup/:name/:regd/:year/:section/:email/:phno',async(req,res)=>{
    const details1=await db.collection('signup').insertOne({name:req.params.name,regd:req.params.regd,year:req.params.year,section:req.params.section,email:req.params.email,phno:req.params.phno});
    res.json(details1);
})
app.get('/check/:name',async(req,res)=>{
    const details=await db.collection('signup').findOne({name:req.params.name});
    res.json(details);
})
app.get('/check1/:email',async(req,res)=>{
    const details=await db.collection('signup').findOne({email:req.params.email});
    res.json(details);
})
app.get('/check2/:phno',async(req,res)=>{
    const details=await db.collection('signup').findOne({phno:req.params.phno});
    res.json(details);
})
connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server Running At port 6000");
    })
})