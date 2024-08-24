const express = require("express");
const {connectMongoDB} = require("./config/db");
const userRoutes = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require("cors");
connectMongoDB();
// creating our api to check whether it is running or not
app.get("/",(req,res)=>{
    res.send("api is running");
});
//middleware Plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors());

// routes
app.use("/api/v1",userRoutes);
app.listen(PORT,()=>{
    console.log(`api is running on PORT:${PORT}`)
});