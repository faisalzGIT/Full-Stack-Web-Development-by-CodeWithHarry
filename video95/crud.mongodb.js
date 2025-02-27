use("crudDB")

db.createCollection('Operations')


// CREATE bbb
// db.Operations.insertOne({
// 	name:"Jerry's Java Development Course",
// 	price:1200,
// 	assignments:12,
// 	projects:5
// })

// CREATE
// db.Operations.insertMany([
// 	{
// 	  name: "Complete Python Bootcamp",
// 	  price: 25,
// 	  assignments: 10,
// 	  projects: 3,
// 	},
// 	{
// 	  name: "JavaScript Mastery",
// 	  price: 15,
// 	  assignments: 8,
// 	  projects: 4,
// 	},
// 	{
// 	  name: "React Essentials",
// 	  price: 30,
// 	  assignments: 7,
// 	  projects: 3,
// 	},
// 	{
// 	  name: "Full-Stack Developer Roadmap",
// 	  price: 50,
// 	  assignments: 20,
// 	  projects: 8,
// 	},
// 	{
// 	  name: "Data Science with Python",
// 	  price: 40,
// 	  assignments: 15,
// 	  projects: 6,
// 	},
// 	{
// 	  name: "UI/UX Design Basics",
// 	  price: 20,
// 	  assignments: 9,
// 	  projects: 2,
// 	},
// 	{
// 	  name: "Machine Learning A-Z",
// 	  price: 60,
// 	  assignments: 12,
// 	  projects: 5,
// 	},
// 	{ 
// 	  name: "Game Development with Unity",
// 	  price: 35,
// 	  assignments: 10,
// 	  projects: 4,
// 	},
// 	{
// 	  name: "Cybersecurity Fundamentals",
// 	  price: 45,
// 	  assignments: 13,
// 	  projects: 7,
// 	},

//  ])


// READ

let a = db.Operations.find({name:"Harys Web Development Course"})
console.log(a.toArray());

let b = db.Operations.findOne({price:1})
// console.log(b);


//UPDATE:
db.Operations.updateOne({price:1}, {$set:{price:1023}} )

// DELETE
db.Operations.deleteOne({price:1200});