import { gql } from "@apollo/client"

export const AUTHENTICATE = gql`
  mutation authorize {
    authenticate(credentials: { username: "kalle", password: "password" }) {
      accessToken
    }
  }
`;