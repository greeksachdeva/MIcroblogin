const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// const models=require('./db/models')
// const db=models.db
const {db} =require('./db/models')
const { usersRoute} = require('./routes/users')
const { postsRoute } = require('./routes/posts')

app.use('/api/posts', postsRoute)
app.use('/api/users', usersRoute)

app.use('/',express.static(__dirname+'/public'))
db.sync()   //use {force:true} to create the table again
    .then(()=>{
        app.listen(4444, () =>{
            console.log('Server started at http://localhost:4444')
        })
    }).catch((err) =>{
        console.error(new Error('Could not start database'))
        console.error(err)
    })
