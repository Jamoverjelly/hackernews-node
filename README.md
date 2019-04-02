# HackerNews Clone with graphql & node

_From The HowToGraphQL Tutorial Series_

Written by [Maira Bello](https://github.com/mairatma)

### Overview

The goal of this tutorial is to build an API for a Hacker News clone.

At a high-level, this will involve working through the basics of how a GraphQL server works by defining a [**GraphQL schema**](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e) for a server and writing corresponding **resolver functions**. From the start, these resolvers will only work to serve data that's stored in-memory, so nothing will be persisted beyond the runtime of the server.

Next a database layer will be added allowing us to actually store and persist the data. The database layer is powered by [Prisma](https://www.prisma.io/) and will be connected to our GraphQL server via the [Prisma client](https://www.prisma.io/docs/prisma-client).

Once we have the database connected, our tasks then turn to adding more advanced features to our API:

1. Implementing signup / login functionality which will enable users to authenticate against the API.

   - This part will also provide automated validation and checking access privileges of our users for certain API operations.

2. Enabling realtime functionality to the API using GraphQL subscriptions.

3. Permitting consumers of the API to apply limits of the list items retrieved from the API by adding filtering and pagination capabilities.

### Technologies

In buidling an _idiomatic_ GrahpQL server entirely from scratch, we'll be leveraging the following technologies:

- `graphql-yoga`: Fully featured GraphQL server with a focus on easy setup, performance & smooth developer experience. `graphql-yoga` is built on top of [Express](https://expressjs.com/), [`apollo-server`](https://github.com/apollographql/apollo-server), [`graphql-js`](https://github.com/graphql/graphql-js) and more.

- [Prisma](https://www.prisma.io/): Prisma replaces traditional ORM's. Use the Prisma client to execute your GraphQL resolvers and simplify database access.

- [GraphQL Playground](https://github.com/prisma/graphql-playground): A "GraphQL IDE" that allows users to interactively explore the functionality of a GraphQL API by sending queries and mutations to it.

#### Attributions

- [graphql-node Tutorial](https://www.howtographql.com/graphql-js/0-introduction/) written by Maira Bello for HowToGraphQL
