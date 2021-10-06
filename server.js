const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://Upulka:upulka@cluster1.qeru0.mongodb.net/notesDB")

//require route
app.use("/" , require("./routes/noteRoute"))

app.listen(3001 , function(){
    console.log('Express server is running on port 3001')
})
/*
then specify the 3001 route as the proxy key of the frontend. For that go to the
frontend folder and open "package.json" and add the below line right after the 4th line
"proxy" : "http://localhost:3001",
 */
