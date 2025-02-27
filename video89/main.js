const exp = require('constants')
const express = require('express')
const app = express()
const router = require('./routes/firstEverRoute.js');

const port = 3000

app.use('/api', router); 

app.use(express.static('public'));

app.get('/', (req, res) => {
  	res.send('Hello INDIA!')
  	console.log('Hey its a GET request');
}).post('/post', (req, res) => {
	res.send('hello ji its a POST request!');
	console.log('Hey its a POST request');
}).put('/put', (req, res) => {
	res.send('hello ji its a put request!');
	console.log('Hey its a put request');
})

app.get('/index', (req,res)=>{
	console.log('it is an INDEx');
	res.sendFile('temlates/index.html', {root: __dirname})
})

app.get('/api', (req, res)=>{
	res.json({ a:1, b:2, c:3, name:['harry', 'jerry']})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});