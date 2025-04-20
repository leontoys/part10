import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
//use applloclient
import { useApolloClient } from "@apollo/client";

export const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      //console.log("Calling mutation with", username, password);
      const { data } = await mutate({ variables: { username, password } });

      if (data?.authenticate?.accessToken) {
        // Must store the token before resetting the store to ensure the new token is used in subsequent requests
        await authStorage.setAccessToken(data.authenticate.accessToken);
        await apolloClient.resetStore();
      }

      return data; // Return the mutation result
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  };

  return [signIn, result];
};
