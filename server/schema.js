const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Post {
        id: ID
        username: String
        timestamp: String
        title: String
        article: String
    }

    input PostInput {
        id: ID
        timestamp: String
        username: String!
        title: String!
        article: String!
    }

    type Query {
        getAllPosts: [Post]
        getPost(id: ID): Post
    }

    type Mutation {
        createPost(input: PostInput): [Post]
        removePost(id: ID): [Post]
    }
`);

module.exports = schema;