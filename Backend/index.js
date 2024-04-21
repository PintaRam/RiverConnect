const express = require("express");
require("dotenv").config(); 
const app = express();
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const riverData=require("./RiverData.json");

app.use(express.static(path.join(__dirname, '../Frontend')));
app.use(express.json());

const Port = process.env.PORT || 4050;
const apiKey = process.env.API_KEY;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/HTML/index.html"));
});

app.get("/About.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,"../Frontend/HTML/About.html"))
})

app.get("/feedback.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,"../Frontend/HTML/feedback.html"))
})

app.get("/Help.html",(req,res)=>
{
    res.sendFile(path.join(__dirname,"../Frontend/HTML/Help.html"))
})

app.post("/Search", async (req, res) => {
    try {
            const query = req.body.query.toLowerCase(); // Convert query to lowercase for case-insensitive matching
        
            const filtered = riverData.RiverData.filter(river => river.name.toLowerCase() === query);
        
            if (filtered.length > 0) {
                res.json({sucess:200, data: filtered[0] });
            } else {
                res.status(404).json({sucess:404, error: 'River not found' });
            }
       console.log("Message from Front End",query);
       console.log(filtered);
    }
     catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



app.listen(Port, () => {
    console.log(`Server Running in http://localhost:${Port}`);
});
