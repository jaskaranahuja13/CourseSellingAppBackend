const mongoose =require("mongoose");
console.log("mongoose")
mongoose.connect("mongodb+srv://jaskaranahuja111:Admin123A@cluster0.95cte.mongodb.net/coursera-app")
const user = require("./routes/user");
const Schema = mongoose.Schema;
const ObjectId= mongoose.Types.ObjectId


const adminSchema=new  Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
});

const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
});

const courseSchema=new Schema({
    title: String,
    description: String,
    imageUrl:String,
    creatorId: ObjectId
});

const purchaseSchema =new Schema({
    userId:ObjectId,
    courseId:ObjectId
});


const userModel = mongoose.model("user",userSchema);
const adminModel= mongoose.model("admin",adminSchema);
const courseModel= mongoose.model("course",courseSchema);
const purchaseModel= mongoose.model("purchase",purchaseSchema);


module.exports = {
    adminModel,
    userModel,
    courseModel,
    purchaseSchema
}
