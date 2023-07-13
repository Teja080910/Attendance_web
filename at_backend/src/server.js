import cors from 'cors';
import express from 'express';
import { connectToDB, db } from "./db.js";
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
app.post('/signup/:name/:regd/:year/:section/:email/:phno',async(req,res)=>{
    const details1=await db.collection('signup').insertOne({name:req.params.name,regd:req.params.regd,year:req.params.year,section:req.params.section,email:req.params.email,phno:req.params.phno});
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
    const detail=await db.collection('signup').find({regd:req.params.regd}).toArray()
    res.json(detail);
})
app.post('/enter/:regd/:bname/:code/:date1/:showTime',async(req,res)=>{
    const details1=await db.collection('details').insertOne({regd:req.params.regd,bname:req.params.bname,code:req.params.code,date:req.params.date1,time:req.params.showTime});
    res.json(details1);
})
app.get('/screen/',async(req,res)=>{
    const details=await db.collection('details').find({}).toArray()
    res.json(details);
})
app.get('/find/:regd',async(req,res)=>{
    const details=await db.collection('signup').findOne({regd:req.params.regd})
    res.json(details);
})
app.get('/details/:regd',async(req,res)=>{
    const data1=await db.collection('details').find({regd:req.params.regd}).toArray()
})
connectToDB(()=>{
    app.listen(4000,()=>{
      console.log("Server Running At port 4000");
    })
})