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