import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import path from 'path';
import Employee from './models/employee.js';
dotenv.config();

const app =  express();
const PORT = 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

//connect to MongoDB
let conn = mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Error connecting to MongoDB:', err));


// Dummy Data Generator Function
const generateDummyEmployees = () => {
    const names = ["Harry", "John", "Alice", "Emma", "Bob", "Charlie", "David", "Sophia", "Liam", "Olivia"];
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
    const languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];

    return Array.from({ length: 10 }, (_, i) => ({
        name: names[i],
        salary: Math.floor(Math.random() * 90000000) + 10000000, // 10M to 100M
        language: languages[Math.floor(Math.random() * languages.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        isManager: Math.random() > 0.5
    }));
};

app.get('/', (req,res)=>{
	res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// Route to Generate and Insert Dummy Data
app.post("/generate", async (req, res) => {
    try {
        await Employee.deleteMany({});
        const employees = generateDummyEmployees();
        await Employee.insertMany(employees);
        res.json({ message: "Dummy data generated successfully", employees });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, ()=>{
	console.log(`Example app listening on Port: ${PORT}`);
	
});