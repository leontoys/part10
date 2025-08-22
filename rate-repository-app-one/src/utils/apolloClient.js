import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import Constants from "expo-constants"
import { setContext } from "@apollo/client/link/context"

const { uri } = Constants.expoConfig.extra
console.log("uri",uri)

const httpLink = createHttpLink({
    uri
})

/* const createApolloClient = () => {
    console.log("uri",Constants.expoConfig.extra.uri)
    return new ApolloClient({
        uri: Constants.expoConfig.extra.uri ,// 'http://192.168.16.133:4000/graphql', //connect to apollo server
        cache : new InMemoryCache()
    })
} */

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient