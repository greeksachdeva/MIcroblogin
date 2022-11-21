$(function(){
    $("#submitBtn").click(function(){
        let Title=document.getElementById('postTitle')
        let t=Title.value
        let Body=document.getElementById('postText')
        let b=Body.value
        window.currentuser = window.localStorage.user
        ? JSON.parse(window.localStorage.user)
        : null;
       console.log(t)
       console.log(b)
        let id=currentuser.id
        if((id)==null)
        {
            console.log("ID toh null hai")
        }
        if(!(t))
        {
            console.log("title is null")
        }
        if(!(b))
        {
            console.log("body is null")
        }
        $.post("/api/posts",
        {
            title: t,
            body: b,
            userId: id
        },window.location.href = "/")
    })
})