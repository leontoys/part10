import { useApolloClient } from "@apollo/client";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

export const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = async () => {
    // Remove the access token from storage
    await authStorage.removeAccessToken();

    // Reset Apollo Client's store
    await apolloClient.resetStore();
  };

  return signOut;
};
