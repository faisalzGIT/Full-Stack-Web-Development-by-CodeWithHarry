// Select the database to use.
use('SIGMACourses');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
  {
    "name": "| JavaScript |",
    "price": 3999,
    "instructor": "Harry"
  },
  {
    "name": "| Python |",
    "price": 2999,
    "instructor": "Emma"
  },
  {
    "name": "| Java |",
    "price": 3499,
    "instructor": "John"
  },
  {
    "name": "| C++ |",
    "price": 1999,
    "instructor": "Alice"
  },
  {
    "name": "| HTML & CSS |",
    "price": 1599,
    "instructor": "Robert"
  },
  {
    "name": "| React.js |",
    "price": 4999,
    "instructor": "Sarah"
  },
  {
    "name": "| Node.js |",
    "price": 3999,
    "instructor": "Michael"
  },
  {
    "name": "| Angular |",
    "price": 4599,
    "instructor": "Sophia"
  },
  {
    "name": "| SQL |",
    "price": 2499,
    "instructor": "William"
  },
  {
    "name": "| Machine Learning |",
    "price": 5999,
    "instructor": "Olivia"
  }
]);


// Print a message to the output window.
console.log(`Data Inserted!!`);


