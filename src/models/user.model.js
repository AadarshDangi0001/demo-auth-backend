import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:String,
    password:String
})

const userModel = mongoose.model("user",userSchema);

export default userModel;