import { ApolloServer, gql } from 'apollo-server-micro'

export const config = {
  api: {
    bodyParser: false
  }
}

const typeDefs = [
  gql`
    type Query {
      root: String
    }

    type Mutation {
      root: String
    }
  `
]

const server = new ApolloServer({
  typeDefs,
  resolvers: {},
  introspection: true,
  playground: true,
  context: {}
})

export default server.createHandler({ path: '/api/graphql' })
