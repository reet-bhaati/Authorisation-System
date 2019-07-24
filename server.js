const express=require('express')
const app=express()
const session=require('express-session')
const passport=require('./passport')
const{
    db,Users
}=require('./db')

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(session({
    secret:'a34jvigiji57i654i$$gh?bgh',
    saveUninitialized:true,
    resave:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/signup',require('./routes/signup'))
app.use('/login',require('./routes/login'))
app.use('/logout',require('./routes/logout'))
app.use('/profile',require('./routes/profile'))

db.sync().then(()=>
{
    app.listen(4000,()=>
    {
        console.log("Server Running on http:localhost:4000")
    })
})