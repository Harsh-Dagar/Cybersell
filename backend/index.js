const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const dbConnect=require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const port=process.env.PORT||4000;
const authRoute=require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dbConnect();



app.use('/api/user',authRoute);

app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})