import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

//create a server 
const app = express()
app.use(express.json())

const PORT = 3000

function start(){
    mongoose.connect("mongodb+srv://graf:1998Asker@monkeycluster.hsvwwuy.mongodb.net/")
    app.listen(PORT)
}

start()

app.post('/addpost',async(req,res)=>{
    const {title,text} = req.body
    const post = Post.create({title,text})
    try {
        res.statusCode(200)
        console.log(post.json())
    }catch (err) {
     res.json(err)
    }
})

app.delete('/posts/:id',async (req,res)=>{
    const id = req.params.id
    const result =  await Post.deleteOne({ _id:id})
    console.log(result);
})



app.get('/posts/:id',async (req,res)=>{
    const id = req.params.id
    const result = await Post.findById(id)
    res.json(result)
})

app.get('/posts',async (req,res)=>{
    const result = await Post.find()
    //
    res.json(result)
})


