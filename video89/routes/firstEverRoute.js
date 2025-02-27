const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req, res)=>{
	res.send(`The API Home`);
});

router.get('/', (req, res)=>{
	res.send(`The API is here`);
});

module.exports = router;