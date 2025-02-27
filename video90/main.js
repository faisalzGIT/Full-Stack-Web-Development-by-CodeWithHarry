const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req,res)=>{
	res.send('The GET request');
});

app.listen(port, ()=>{
	console.log('THE APP IS ONLINE AT http://localhost:3000');
})