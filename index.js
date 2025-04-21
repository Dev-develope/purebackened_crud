import bodyParser from "body-parser";
import express from "express";
import connectionDb from "./db.config.js";
import userdetail from "./route/adduserRoute.route.js";

const app = express();
connectionDb();
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/",userdetail)

app.listen(4000,()=>{
    console.log('server is running at 4000');
    
})