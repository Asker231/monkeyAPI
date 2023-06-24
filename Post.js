import mongoose from 'mongoose'
//create a model 
const Post = mongoose.Schema({
    title:{type:String,required:true},
    text:{type:String,required:true}
})
export default mongoose.model('Post',Post)