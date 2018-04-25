const { GraphQLServer } = require('graphql-yoga')

// 2
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]
let idCount = links.length
const resolvers = {
  Query: {
    info: () => `Quang dep trai`,
    feed: () => links,
    link: (root,args) => {
      const link = links.filter(el => el.id === args.id)[0]
      return link
    }
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }
      links.push(link)
      return link
    },
    updateLink: (root, args) => {
      const linkIndex = links.findIndex(el => el.id === args.id)
      links[linkIndex].description = args.description
      links[linkIndex].url = args.url
      return links[linkIndex]
    },
    deleteLink: (root, args) => {
      const link = links.filter(el => el.id === args.id)[0]
      return link
    }
  }
}


// 3
const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
