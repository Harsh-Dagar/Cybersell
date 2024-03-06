const mongoose=require('mongoose');
const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        // console.log(process.env.MONGO_URL);
        console.log("Successfully connected to Database!!!");
    }).catch((err) => {
        console.log("Error IN connecting to database!!!!");
        console.log(err);
    })
}
module.exports=dbConnect;