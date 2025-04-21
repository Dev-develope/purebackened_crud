import mongoose from "mongoose";

function connectionDb(){
    mongoose.connect("mongodb+srv://dev:bhuIMuJ2KdOITUGm@cluster0.0z1zkf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(res=>{
        console.log("data connection success")
    }).catch(err=>{
        console.log("connection failed")
    })
}

export default connectionDb;