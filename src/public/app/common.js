$(() => {
  $("#navbar").load("../components/navbar.html", () => {
    login("greek");
    //console.log(window.currentuser.username)
  }); //login function runs only when the navbar is loaded otherwise the nav-username would be altered even before it would've been created
  $("#footer").load("../components/footer.html");
  $("#content").load("/components/all-posts.html"); //this has it's own scripts because when all-posts.html is loaded it will call the required scripts on its own
  // login(mehhul)
});

function login(usern) {
  window.currentuser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  //console.log(currentuser)
  //if (!currentuser) {
    $.get("/api/users/" + usern, {}, (user) => {
      if (user) {
        console.log("Logged in as", user.username);
        window.localStorage.user = JSON.stringify(user);
        currentuser = user;
        $("#nav-username").text(currentuser.username);
      }
    });
  //} 
  // else {
  //   console.log("Resuming session as", currentuser.username);
  //   $("#nav-username").text(currentuser.username);
  // }
}


