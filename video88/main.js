const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// Middleware to serve static files
app.use(express.static('public'));

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the ghar Page!');
});

// Define an "About" route
app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

app.get('/about/:slug', (req,res)=>{
  //logic to fetch slug from the DB
  res.send(`hello ${req.params.slug}`)

  // for URL: http://localhost:3000/about/java?mode=dark&region=in
  console.log(req.params); //will output: { slug: 'java' }
  console.log(req.query);  //will output: { mode: 'dark', region: 'in' }
})
app.get('/about/:first/:second', (req,res)=>{
  //logic to fetch slug from the DB
  res.send(`hello ${req.params.first}, and hello ${req.params.second}`)
  
})

// Define a "Contact" route
app.get('/contact', (req, res) => {
  res.send('Contact us at: contact@example.com');
});

// Define a 404 route for undefined paths
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});