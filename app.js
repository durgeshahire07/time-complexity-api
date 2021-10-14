const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();



//middlewares
app.use(bodyParser.json())
app.use(cors());


//import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)


//routes
app.get('/',(req,res)=>{
    res.send("hey, we're at home")
})

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
    console.log("Database connected")
})

// mongodb+srv://durgesh07:<password>@cluster0.0bjlc.mongodb.net/test
//listening to the server 
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`)
});