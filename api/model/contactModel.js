import mongoose from "mongoose";

const contactModal = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        default : "No Message Provided"
    }
},{timestamps : true});

export const Contact = new mongoose.model("contact" , contactModal);