# Twitter Clone

## Git Commands

```shell
git init
git add readme.md
git commit -m "repo initialized"
git branch -M main
git remote add origin git@github.com:Mehul10/twitter-clone.git
git push -u origin main
```
## Database Commands

```
mysql -u root -p

create database twitter;

 CREATE USER 'greek'@'localhost' IDENTIFIED BY 'greek123';

GRANT ALL ON *.* TO 'greek'@'localhost';

flush privileges;
```
## Project Structure

### Backend(Server)
```
TWT-CLONE\SRC      
├───controllers
├───db
├───public
└───routes
```

### Frontend (Client Side Code)
```
TWT-CLONE\SRC\PUBLIC
├───app                     # our own frontend JS code
├───components              # our own HTML files/components
├───css                     # CSS liburaries we are using
├───fonts                   
└───js                      # JS libraries we are using
```
## Project Flow

### db

* Connects the db

* Defines all the tables(models) in sql using sequelize

### Controllers
 
 * Controllers define all the **functions** to be used to serve information on the frontend

 * These functions use all the database(sequelize) functions to fetch the data

 * username is fetched from the cleint. Login infrastructure not implemented(yet).

 * If the username does not exist then new user is made with that username.

### routes

* Routes are a way of doing .use() in file where app is not defined. So, instead of app.use() we do route.use() and export this route and map it in the server file.

* These routes are used to serve data on the front end

* They use the functions defined in the controllers to fetch/update the data

### public

* Keeps the frontend files to be served

## Business Logic

### Users
1. create users this will create a new user with a random username

### Posts
1. Create post this will create a new post, required fields are

    * username (the author of this post)
    * body
2. show all posts list all existing posts, we should have following filtering support

    * filter by username
    * filter by query contained in title (search by title)

3. edit posts [TBD]

4. delete posts [TBD]

### Comments
1. show all comments (of a user)

2. show all comments (under a post)

3. add a comment

### Likes [TBD]

## API Documentation

1. POST /users\
    Post request on the users route creates new user with username  

2. GET /users/{userId}\
    Get request on users route gets the user by id or username

3. GET /posts\
    Gets all the posts

4. POST /posts\
    Creates new post with userId, title, body

    ### Mistakes that wasted a lot of time
    1. while selecting the navbar didn't put # with the name inside $ and wasted many hours and ended up wasting 2 days actually.

    2. z-index issue

    3. only put # while accessing ids not assigning

    4. don't write id in class
