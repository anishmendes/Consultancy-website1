const mongoose=require("mongoose")

//connecting to mongo DB step-3
mongoose.connect("mongodb:/0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log('failed');
})

//Defing User Schema step-4
const newSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection