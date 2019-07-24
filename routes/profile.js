const route=require('express').Router()
const passport=require('../passport')
const{Users}=require('../db')

route.get('/',(req,res)=>
{
    if(req.user)
    {
      return res.render('profile',{user:req.user})
    }
    else
    {
        res.redirect('/login')
    }
})

module.exports=route