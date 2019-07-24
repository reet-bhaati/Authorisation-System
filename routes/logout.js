const route=require('express').Router()
const passport=require('../passport')

route.get('/',(req,res)=>
{
    req.logout()
    res.redirect('/login')
})

module.exports=route