import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://192.168.1.102:4000/graphql', //connect to apollo server
        cache : InMemoryCache()
    })
}

export default createApolloClient