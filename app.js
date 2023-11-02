const express = require('express')
const users = require('./DataBase/user')

const app = express()

app.get('/',(reg,res)=>{
    console.log(reg)
    res.json('Hellow Exspress')
})

app.get ('/users', (reg,res)=>{

    res.json (users)
})

app.get ('/users/:userId', (reg,res)=> {

    const userIndex = +reg.params.userId;

    if (userIndex <0) {
        res.status(400).json('Please enter valid id')
        return;
    }


    const user= users[userIndex];
    if (!user) {
        res.status(404).json(`User with Id ${userIndex} is not found`)
        return;
    }

    res.json (users)
})

app.listen(5000, ()=>{
    console.log('Server listen on port 5000')
})