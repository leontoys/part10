import { gql } from "@apollo/client"

export const AUTHENTICATE = gql`
  mutation authorize($userName:String!,$password:String!) {
    authenticate(credentials: { username: $userName, password: $password}) {
      accessToken
    }
  }
`;

export const REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      id
      rating
      repositoryId
      text
      userId
    }
  }
`;

export const SIGNUP = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      createdAt
      id
      reviewCount

      username
    }
  }
`;
