const{ Router }= require('express')
const {
    createUser,
    getUserById,
    getUserByUsername
} = require('../../controllers/users')

const route= Router()

//to get all users
route.get('/:id', async(req,res)=>{     // since the functions imported from controllers access the db hence we need to write async in our middleware because we are awaiting those functions
     let user;
     if(isNaN(parseInt(req.params.id)))
     {
         user= await getUserByUsername(req.params.id)
     }
     else
     {
         user= await getUserById(req.params.id)
     }
     if(user)
     {
         res.status(200).send(user)     //read up on HTTP request codes
     }
     else
     {
         res.status(404).send({
             error: 'Not found this userID/username'
         })
     }

})

route.post('/:name',async (req,res)=>{
    
        const user= await createUser(req.params.name)   // A post request has both body and url params
        res.status(201).send(user)
  
})
module.exports={
    usersRoute: route
}
