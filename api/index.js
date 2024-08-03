import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Contact } from "./model/contactModel.js";
import path from "path";
dotenv.config();

mongoose.connect(process.env.CONNECTION).then(()=>{
    console.log("database Connected");
}).catch((error)=>{
    console.log(error);
})

const PORT = 3000;

const __dirname = path.resolve();

const app = express();
app.use(express.json());

app.post("/api/contact" , (req,res)=>{
    const { name , email , message } = req.body;
    if(!name || !email){
        return res.json({ message : "Provide Email and Name"});
    }

    const contactData = new Contact({ name , email , message});
    contactData.save()
    res.json({ message : `Thank You For Contacting , I Will Send Mail On This email address ${email}` });
})

app.use(express.static(path.join(__dirname, "/client/dist")));

app.use("*" , (req,res)=>{
    res.sendFile(path.join(__dirname, "client" , "dist" , "index.html"));
})

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})


