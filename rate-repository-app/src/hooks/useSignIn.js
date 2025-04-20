import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

export const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    try {
      console.log("Calling mutation with", username, password);
      const response = await mutate({ variables: { username, password } });
      console.log("response", response);
      return response; // Return the mutation result
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  };

  return [signIn, result];
};
