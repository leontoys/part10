import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://192.168.16.133:4000/graphql', //connect to apollo server
        cache : new InMemoryCache()
    })
}

export default createApolloClient