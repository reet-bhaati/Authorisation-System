const Sequelize=require('sequelize')

const db=new Sequelize('authentication','john','john',{
    dialect:'sqlite',
    storage:'./database'
})

const Users=db.define('user',{
    username:
    {
        type:Sequelize.STRING,
        unique:true
    },
    password:{
        type:Sequelize.STRING
    },
    email:
    {
        type:Sequelize.STRING
    }
})

module.exports={
    db,Users
}