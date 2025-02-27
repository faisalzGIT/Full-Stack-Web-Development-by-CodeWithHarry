import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect('mongodb://localhost:27017/todo')

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
	res.send('Hello World!!!')
	const todo = new Todo({title:"Buy Sabji", desc:"Buy kanda, Buy mirchi", isDone:false});
	todo.save();
})

app.listen(PORT, ()=>{
	console.log(`APP is listening on port ${PORT}`);
	
})
