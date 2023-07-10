import express from 'express'
import {db,connectToDB} from "./db.js";
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("server is running successfully!");
})
// app.get('/install',(req,res)=>{
//     const push=db.collection('register').insertOne({name:"sanju"});
//     res.json(push);
// })
app.post('/signup/:name/:regd/:year/:section/:caste/:email/:phno',async(req,res)=>{
    const details1=await db.collection('signup').insertOne({name:req.params.name,regd:req.params.regd,year:req.params.year,section:req.params.section,caste:req.params.caste,email:req.params.email,phno:req.params.phno});
    res.json(details1);
})
app.get('/check1/:email',async(req,res)=>{
    const details=await db.collection('signup').findOne({email:req.params.email});
    res.json(details);
})
app.get('/check2/:phno',async(req,res)=>{
    const details=await db.collection('signup').findOne({phno:req.params.phno});
    res.json(details);
})
app.get('/detail/:regd',async(req,res)=>{
    const details=await db.collection('signup').find({regd:req.params.regd}).toArray()
    res.json(details);
})
app.post('/enter/:regd/:bname/:code/:duration/:pdate/:ldate',async(req,res)=>{
    const details1=await db.collection('details').insertOne({regd:req.params.regd,bname:req.params.bname,code:req.params.code,duration:req.params.duration,pdate:req.params.pdate,ldate:req.params.ldate});
    res.json(details1);
})
app.get('/screen/:regd',async(req,res)=>{
    const details=await db.collection('details').find({regd:req.params.regd}).toArray()
    res.json(details);
})
connectToDB(()=>{
    app.listen(4000,()=>{
        console.log("Server Running At port 4000");
    })
})