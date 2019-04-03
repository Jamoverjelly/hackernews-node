const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },
  Link: {
    id: parent => parent.id,
    url: parent => parent.url,
    description: parent => parent.description
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
