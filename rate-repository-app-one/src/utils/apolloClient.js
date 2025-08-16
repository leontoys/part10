import { ApolloClient, InMemoryCache } from '@apollo/client'
import Constants from "expo-constants"

const createApolloClient = () => {
    console.log("uri",Constants.expoConfig.extra.uri)
    return new ApolloClient({
        uri: Constants.expoConfig.extra.uri ,// 'http://192.168.16.133:4000/graphql', //connect to apollo server
        cache : new InMemoryCache()
    })
}

export default createApolloClient