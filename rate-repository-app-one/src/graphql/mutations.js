import { gql } from "@apollo/client"

export const AUTHENTICATE = gql`
  mutation authorize($userName:String!,$password:String!) {
    authenticate(credentials: { username: $userName, password: $password}) {
      accessToken
    }
  }
`;