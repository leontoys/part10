import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
          id
        }
      }
    }
  }
`;

export const GET_USER = gql`
  {
    me {
      id
      username
      createdAt
      reviews {
        edges {
          node {
            id
            userId
            repositoryId
            rating
            createdAt
            text
            user {
              username
            }
          }
        }
      }
      reviewCount
    }
  }
`;

export const GET_REPO = gql`
  query FindRepoById($id: ID!) {
    repository(id: $id) {
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      id
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;