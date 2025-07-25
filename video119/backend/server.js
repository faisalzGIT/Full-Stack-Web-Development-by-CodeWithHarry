import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send('Hello from POST request!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})