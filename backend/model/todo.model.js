import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

const Todo = mongoose.model("todo",todoSchema);
export default Todo;