const connectToMongo = require('./db')    //db.js

const express = require('express')
var cors = require('cors')

connectToMongo();


const app = express()
const port = 5000

app.use(cors)

app.get('/', (req, res) => {
  res.send('Hello Worldddddddddddddddddddddddddd!')
})


app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.use('/api/notes',require('./routes/notes'))




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




































// const connectToMongo = require('./db')

// const express = require('express')

// connectToMongo();
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Worldlllllllllll!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })
