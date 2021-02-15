const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const port = process.env.PORT || 8080

const app = express()
app.use(cors())

app.get('/api/products',(req,res)=>{
    const data = fs.readFileSync(path.join(__dirname,"products-data.json"),'utf8')
    res.set({'Content-Type': 'application/json'})
    res.send(JSON.parse(data))
})

app.listen(port,()=>{
    console.log("Get Products data api listening on ",port)
})
