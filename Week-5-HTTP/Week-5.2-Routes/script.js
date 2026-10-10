const express = require("express");

const { users } = require("./db");
const app = express();
//TO KNOW REASON FOR THIS ROUTE ARRANGEMENT READ NOTES(even book)

//nested route to get specific post --> most specific so first
app.get("/users/:id/posts/:postId", (req, res) => {
    console.log(req.params.id);
    console.log(req.params.postId);

    const user = users.find(user => user.UserId === req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "sorry user not found"
        });
    }

    const post = user.posts.find(post => post.PostId === req.params.postId);
    //find only works on arrays
    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        })
    }
    res.status(200).json(post);

});

//nested route to get all the posts of user --.> less specific from the getting particular posts
app.get("/users/:id/posts", (req, res) => {
    console.log(req.params.id);

    const user = users.find(user => user.UserId === req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        });
    }

    res.status(200).json(user.posts);
})


//static route
app.get("/users", (req, res) => {

    const userIds = users.map(user => user.UserId);
    res.status(200).json(userIds);//this give the userIds of the users

    // res.status(200).json(users); // this returns the array of users objects & i can send this without using map 

});


//query parameters
app.get("/users/filter", (req, res) => { //url should be /user?active=true
    /* 
    the error i encountered here was route 1 & route 2 had same app.get("/users", since express goes from 
    top to bottom the first matched route gets executed in this case route-1 thread never reached route-2
    to encounter this im adding this route  /users/filter  so that it comes unique route and thread reaches here 
    or we can check if query paramerter active is unfined or not if defined returns active users, 
    if undefined return all users
     */
    const active = req.query.active;

    const activeUsers = users
        .filter(user => user.active === (active === "true"))
        .map(user => user.UserId);
    //since url is the string... doing active === true will result in false cuz   boolean true != "true"

    // console.log("Query:", active);
    // console.log("Users:", users);
    // console.log("Filtered:", users.filter(
    //     user => user.active === (active === "true")
    // ));


    //if there are no active users
    if (activeUsers.length === 0) { //filter returns array so activeUsers is an Array
        return res.status(200).json({
            message: active === "true" ? "there are no active users" : "sorry there are no inactive users"
        })
    }
    res.status(200).json(activeUsers);
})


//dyanmic routes
app.get("/users/:id", (req, res) => {
    const user = users.find(user => user.UserId === req.params.id);
    //above user.UserId "UserId" should be same as the declared name above    

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);

})


app.listen(5000, () => {
    console.log("server is running");
});