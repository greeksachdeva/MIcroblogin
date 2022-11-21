const {Users, db}=require('../db/models')

async function createUser(usern)
{
    const user=await Users.create({
        username: usern
    })
    return user
}

async function getUserById(id)
{
    return await Users.findOne({where: {id}})     //when searching using key always put a where
}
async function getUserByUsername(username)
{
    return Users.findOne({where: { username}})
}

module.exports= {
    createUser,
    getUserById,
    getUserByUsername
 }

 //test code

// //db.sync({force:true})
// async function task()
// {
//     console.log('hello')
//     console.log(await createUser('mehhul'))
//     console.log('------------------')
//     console.log(await createUser('somebitch'))
//     console.log('------------------')

// }
// task()