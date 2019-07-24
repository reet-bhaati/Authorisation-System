const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const {Users}=require('./db')
const session=require('express-session')

passport.use(
    new LocalStrategy((username,password,done)=>
    {
        Users.findOne({
            where:{username}
        })
        .then((user)=>
        {
            if(!user)
                return done(new Error('invalid username'))

            if(user.password!=password)
                return done(null,false)

            done(null,user)
        })
        .catch(done)
    })
)

passport.serializeUser((user,done)=>
{
    done(null,user.id)
})

passport.deserializeUser((userId,done)=>
{
    Users.findOne({
        where:{id:userId}
    })
    .then((user)=>done(null,user))
    .catch(done)
})

module.exports=passport
