const route=require('express').Router()
const passport=require('../passport')
const {Users}=require('../db')

route.get('/',(req,res)=>res.render('signup'))

route.post('/',(req,res)=>
{
    Users.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    .then(()=>res.redirect('/login'))
    .catch((err)=>console.error(err))
})

module.exports=route