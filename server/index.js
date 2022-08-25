const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");
const schema = require('./schema');
const { v4: uuidv4 } = require('uuid');

let posts = [];

const app = express();
app.use(cors());

const root = {
    getAllPosts: () => posts,
    getPost: ({id}) => posts.find((post) => id == post.id),
    createPost: ({input}) => {
        posts.push({...input, timestamp: Date.now(), id: uuidv4()});
        return posts;
    },
    removePost: ({id}) => {
        posts = [...posts.filter((post) => id != post.id)];
        return posts
    },
}


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
}));

app.listen(5000, () => console.log('server started on port 5000'));