const {Posts, Users}=require('../db/models')

async function createNewPost(userId,title,body) {
    const post=await Posts.create({
        title,
        body,
        userId
    })
    return post
}
// pass an object inside findAllPosts
// 1. {username: ''}
// 2. {title: ''}
async function findAllPosts(query){
    //query not handled here
    const posts=await Posts.findAll({include:[Users]})      //we can include another model while finding if there is a relation between 
                                                            //that model and the current model in the db
    return posts
}
module.exports={
    createNewPost,
    findAllPosts
}
// async function task(){
//     console.log(await createNewPost(1,'Third Post','or are you quora?'))
//     console.log(await createNewPost(2,'Fourth Post','maybe facebook?'))

// }
// task()

// BACK TICKS- instead of using single quotes, use backticks as they help in string templating
// ${}- this is a placeholder syntax


// async function task2(){
//     const posts=await findAllPosts()
//     for(let p of posts)
//     {
//         console.log(`${p.title}\n${p.user.username}\n${p.body}\n--------------\n`)
//     }
// }
// task2()