const users = [
    {
        UserId: "123",
        UserName: "Ak",
        active: true,
        posts: [
            {
                PostId: "post1",
                title: "Learning Node.js",
                content: "Today I learned about Express routing.",
                likes: 25
            },
            {
                PostId: "post2",
                title: "My First API",
                content: "I built my first REST API using Express.",
                likes: 42
            },
            {
                PostId: "post3",
                title: "Understanding Middleware",
                content: "Middleware is an important concept in Express.",
                likes: 18
            }
        ]
    },

    {
        UserId: "124",
        UserName: "Rahul",
        active: true,
        posts: [
            {
                PostId: "post1",
                title: "My JavaScript Journey",
                content: "JavaScript is becoming easier to understand.",
                likes: 31
            },
            {
                PostId: "post2",
                title: "Learning APIs",
                content: "Today I learned how APIs communicate with clients.",
                likes: 15
            }
        ]
    },

    {
        UserId: "125",
        UserName: "John",
        active: false,
        posts: [
            {
                PostId: "post1",
                title: "My First Project",
                content: "I finally completed my first web project.",
                likes: 50
            },
            {
                PostId: "post2",
                title: "Debugging is Hard",
                content: "Spent two hours finding a tiny bug.",
                likes: 12
            }
        ]
    },

    {
        UserId: "126",
        UserName: "Sarah",
        active: true,
        posts: [
            {
                PostId: "post1",
                title: "Frontend Development",
                content: "Learning how frontend and backend communicate.",
                likes: 37
            },
            {
                PostId: "post2",
                title: "React Basics",
                content: "Started learning components and props.",
                likes: 44
            },
            {
                PostId: "post3",
                title: "Building Projects",
                content: "Projects are helping me understand programming better.",
                likes: 61
            }
        ]
    },

    {
        UserId: "127",
        UserName: "Mike",
        active: false,
        posts: [
            {
                PostId: "post1",
                title: "Database Basics",
                content: "Started learning how databases store information.",
                likes: 22
            },
            {
                PostId: "post2",
                title: "SQL Practice",
                content: "Practicing SELECT, INSERT and UPDATE queries.",
                likes: 29
            }
        ]
    }
];
// module.exports = users; /*exporting like this is perfectly fine since the data is small and i
// only have users rn, in future i might have post, commets and all other things, so exporting it has
// object works better*/

module.exports = {
    users
};


