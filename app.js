const express = require('express')
const usersRouter = require("./routers/user.router");
const axios = require('axios')



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',async (reg,res)=>{
    console.log(reg)
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.status(resp.status).json(resp.data)
})


app.use('/users', usersRouter)

app.listen(5000, ()=>{
    console.log('Server listen on port 5000')
})