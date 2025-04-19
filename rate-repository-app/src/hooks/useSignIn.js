import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

export const useSignIn = () => {
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
